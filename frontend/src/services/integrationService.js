// Integration Service - Conecta Backend con HubSpot CRM
import { crmService } from './crmService';

class IntegrationService {
  constructor() {
    this.backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
  }

  // 1. Lead desde HubSpot → Crear usuario en Backend
  async createUserFromLead(leadData) {
    try {
      // Primero crear contacto en HubSpot
      const crmResult = await crmService.createContact({
        firstName: leadData.firstName,
        lastName: leadData.lastName,
        email: leadData.email,
        phone: leadData.phone,
        company: leadData.company,
        jobTitle: leadData.jobTitle
      });

      if (crmResult.success) {
        // Luego crear usuario en backend
        const backendResult = await this.createBackendUser({
          name: `${leadData.firstName} ${leadData.lastName}`,
          email: leadData.email,
          password: this.generateTemporaryPassword(),
          role: 'cliente',
          hubspot_contact_id: crmResult.contactId
        });

        return {
          success: true,
          crmContactId: crmResult.contactId,
          backendUserId: backendResult.userId
        };
      }

      return { success: false, message: 'Error al crear contacto en CRM' };
    } catch (error) {
      console.error('Integration Error:', error);
      return { success: false, message: 'Error en la integración' };
    }
  }

  // 2. Usuario registrado en Backend → Actualizar HubSpot
  async updateHubSpotFromBackend(userData) {
    try {
      const result = await crmService.updateContact(userData.hubspot_contact_id, {
        lifecycle_stage: 'customer',
        customer_status: 'active',
        backend_user_id: userData.id
      });

      return result;
    } catch (error) {
      console.error('HubSpot Update Error:', error);
      return { success: false, message: 'Error al actualizar HubSpot' };
    }
  }

  // 3. Servicio contratado → Crear Deal en HubSpot
  async createDealFromService(serviceData) {
    try {
      const dealResult = await crmService.createDeal({
        name: serviceData.service_name,
        amount: serviceData.amount,
        description: serviceData.description,
        contactId: serviceData.hubspot_contact_id
      });

      if (dealResult.success) {
        // Actualizar servicio en backend con deal ID
        await this.updateBackendService(serviceData.id, {
          hubspot_deal_id: dealResult.dealId
        });
      }

      return dealResult;
    } catch (error) {
      console.error('Deal Creation Error:', error);
      return { success: false, message: 'Error al crear deal' };
    }
  }

  // 4. Progreso actualizado → Notificar en HubSpot
  async updateProgressInHubSpot(progressData) {
    try {
      // Crear nota en HubSpot sobre el progreso
      const noteResult = await crmService.createNote({
        contactId: progressData.hubspot_contact_id,
        content: `Progreso actualizado: ${progressData.progress}% - ${progressData.description}`,
        subject: 'Actualización de Proyecto'
      });

      // Si el progreso es 100%, cerrar deal
      if (progressData.progress === 100) {
        await crmService.updateDeal(progressData.hubspot_deal_id, {
          dealstage: 'closedwon'
        });
      }

      return noteResult;
    } catch (error) {
      console.error('Progress Update Error:', error);
      return { success: false, message: 'Error al actualizar progreso' };
    }
  }

  // 5. Sincronización bidireccional
  async syncData() {
    try {
      // Obtener usuarios del backend
      const backendUsers = await this.getBackendUsers();
      
      // Obtener contactos de HubSpot
      const hubspotContacts = await crmService.getContacts();

      // Sincronizar datos
      for (const user of backendUsers) {
        const hubspotContact = hubspotContacts.find(
          contact => contact.email === user.email
        );

        if (hubspotContact && !user.hubspot_contact_id) {
          // Actualizar backend con HubSpot ID
          await this.updateBackendUser(user.id, {
            hubspot_contact_id: hubspotContact.id
          });
        }
      }

      return { success: true, message: 'Sincronización completada' };
    } catch (error) {
      console.error('Sync Error:', error);
      return { success: false, message: 'Error en sincronización' };
    }
  }

  // Métodos auxiliares para Backend
  async createBackendUser(userData) {
    try {
      const response = await fetch(`${this.backendUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, userId: data.id };
      } else {
        throw new Error('Error al crear usuario en backend');
      }
    } catch (error) {
      console.error('Backend User Creation Error:', error);
      return { success: false, message: 'Error al crear usuario' };
    }
  }

  async updateBackendUser(userId, updateData) {
    try {
      const response = await fetch(`${this.backendUrl}/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.getAuthToken()}`
        },
        body: JSON.stringify(updateData)
      });

      return response.ok;
    } catch (error) {
      console.error('Backend Update Error:', error);
      return false;
    }
  }

  async updateBackendService(serviceId, updateData) {
    try {
      const response = await fetch(`${this.backendUrl}/client-services/${serviceId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.getAuthToken()}`
        },
        body: JSON.stringify(updateData)
      });

      return response.ok;
    } catch (error) {
      console.error('Backend Service Update Error:', error);
      return false;
    }
  }

  async getBackendUsers() {
    try {
      const response = await fetch(`${this.backendUrl}/users`, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      });

      if (response.ok) {
        return await response.json();
      }
      return [];
    } catch (error) {
      console.error('Backend Users Fetch Error:', error);
      return [];
    }
  }

  // Utilidades
  generateTemporaryPassword() {
    return Math.random().toString(36).slice(-8);
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  // Webhook para recibir actualizaciones de HubSpot
  async handleHubSpotWebhook(webhookData) {
    try {
      switch (webhookData.subscriptionType) {
        case 'contact.creation':
          await this.handleNewContact(webhookData);
          break;
        case 'contact.propertyChange':
          await this.handleContactUpdate(webhookData);
          break;
        case 'deal.creation':
          await this.handleNewDeal(webhookData);
          break;
        default:
          console.log('Webhook no manejado:', webhookData.subscriptionType);
      }

      return { success: true };
    } catch (error) {
      console.error('Webhook Error:', error);
      return { success: false, message: 'Error procesando webhook' };
    }
  }

  async handleNewContact(webhookData) {
    // Cuando se crea un contacto en HubSpot
    const contact = webhookData.contact;
    
    // Verificar si ya existe en backend
    const existingUser = await this.getBackendUserByEmail(contact.email);
    
    if (!existingUser) {
      // Crear usuario en backend
      await this.createBackendUser({
        name: `${contact.firstname} ${contact.lastname}`,
        email: contact.email,
        password: this.generateTemporaryPassword(),
        role: 'cliente',
        hubspot_contact_id: contact.id
      });
    }
  }

  async handleContactUpdate(webhookData) {
    // Cuando se actualiza un contacto en HubSpot
    const contact = webhookData.contact;
    const propertyName = webhookData.propertyName;
    const newValue = webhookData.newValue;

    // Actualizar datos correspondientes en backend
    if (propertyName === 'lifecycle_stage' && newValue === 'customer') {
      const user = await this.getBackendUserByEmail(contact.email);
      if (user) {
        await this.updateBackendUser(user.id, {
          is_active: true,
          customer_status: 'active'
        });
      }
    }
  }

  async handleNewDeal(webhookData) {
    // Cuando se crea un deal en HubSpot
    const deal = webhookData.deal;
    
    // Asociar con usuario en backend si existe
    if (deal.contactId) {
      const user = await this.getBackendUserByHubSpotId(deal.contactId);
      if (user) {
        // Crear servicio en backend
        await this.createBackendService({
          user_id: user.id,
          service_name: deal.dealname,
          amount: deal.amount,
          hubspot_deal_id: deal.id
        });
      }
    }
  }

  async getBackendUserByEmail(email) {
    try {
      const response = await fetch(`${this.backendUrl}/users/by-email/${email}`, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Backend User Fetch Error:', error);
      return null;
    }
  }

  async getBackendUserByHubSpotId(hubspotId) {
    try {
      const response = await fetch(`${this.backendUrl}/users/by-hubspot/${hubspotId}`, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Backend User Fetch Error:', error);
      return null;
    }
  }

  async createBackendService(serviceData) {
    try {
      const response = await fetch(`${this.backendUrl}/client-services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.getAuthToken()}`
        },
        body: JSON.stringify(serviceData)
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Backend Service Creation Error:', error);
      return null;
    }
  }
}

// Export singleton instance
export const integrationService = new IntegrationService();

// Usage examples:
/*
// 1. Lead desde formulario → Crear en ambos sistemas
const result = await integrationService.createUserFromLead({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  company: 'Example Corp'
});

// 2. Sincronizar datos
await integrationService.syncData();

// 3. Actualizar progreso en ambos sistemas
await integrationService.updateProgressInHubSpot({
  hubspot_contact_id: '123',
  hubspot_deal_id: '456',
  progress: 75,
  description: 'Diseño completado'
});
*/
