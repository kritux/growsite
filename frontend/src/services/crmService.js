// CRM Integration Service
// Recomendado: HubSpot CRM (Gratuito hasta 2,000 contactos)

class CRMService {
  constructor() {
    // HubSpot Configuration
    this.hubspotConfig = {
      portalId: process.env.REACT_APP_HUBSPOT_PORTAL_ID,
      formId: process.env.REACT_APP_HUBSPOT_FORM_ID,
      apiKey: process.env.REACT_APP_HUBSPOT_API_KEY,
      baseUrl: 'https://api.hubapi.com'
    };
  }

  // Submit contact form to HubSpot
  async submitContactForm(formData) {
    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${this.hubspotConfig.portalId}/${this.hubspotConfig.formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: formData.name.split(' ')[0] },
            { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') || '' },
            { name: 'email', value: formData.email },
            { name: 'phone', value: formData.phone },
            { name: 'service_interest', value: formData.service },
            { name: 'message', value: formData.message }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        })
      });

      if (response.ok) {
        return { success: true, message: 'Contacto enviado exitosamente' };
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('CRM Integration Error:', error);
      return { success: false, message: 'Error al enviar el formulario' };
    }
  }

  // Create contact in HubSpot
  async createContact(contactData) {
    try {
      const response = await fetch(`${this.hubspotConfig.baseUrl}/crm/v3/objects/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.hubspotConfig.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            firstname: contactData.firstName,
            lastname: contactData.lastName,
            email: contactData.email,
            phone: contactData.phone,
            company: contactData.company,
            jobtitle: contactData.jobTitle,
            lifecycle_stage: 'lead',
            lead_status: 'new'
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, contactId: data.id };
      } else {
        throw new Error('Error al crear contacto');
      }
    } catch (error) {
      console.error('CRM Contact Creation Error:', error);
      return { success: false, message: 'Error al crear contacto' };
    }
  }

  // Create deal in HubSpot
  async createDeal(dealData) {
    try {
      const response = await fetch(`${this.hubspotConfig.baseUrl}/crm/v3/objects/deals`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.hubspotConfig.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            dealname: dealData.name,
            amount: dealData.amount,
            dealstage: 'appointmentscheduled',
            pipeline: 'default',
            closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
            description: dealData.description
          },
          associations: [
            {
              to: { id: dealData.contactId },
              types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }]
            }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, dealId: data.id };
      } else {
        throw new Error('Error al crear deal');
      }
    } catch (error) {
      console.error('CRM Deal Creation Error:', error);
      return { success: false, message: 'Error al crear deal' };
    }
  }

  // Get contact by email
  async getContactByEmail(email) {
    try {
      const response = await fetch(`${this.hubspotConfig.baseUrl}/crm/v3/objects/contacts/${email}?idProperty=email`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.hubspotConfig.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, contact: data };
      } else {
        return { success: false, message: 'Contacto no encontrado' };
      }
    } catch (error) {
      console.error('CRM Get Contact Error:', error);
      return { success: false, message: 'Error al obtener contacto' };
    }
  }

  // Update contact
  async updateContact(contactId, updateData) {
    try {
      const response = await fetch(`${this.hubspotConfig.baseUrl}/crm/v3/objects/contacts/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.hubspotConfig.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: updateData
        })
      });

      if (response.ok) {
        return { success: true, message: 'Contacto actualizado' };
      } else {
        throw new Error('Error al actualizar contacto');
      }
    } catch (error) {
      console.error('CRM Update Contact Error:', error);
      return { success: false, message: 'Error al actualizar contacto' };
    }
  }

  // Get deals for a contact
  async getContactDeals(contactId) {
    try {
      const response = await fetch(`${this.hubspotConfig.baseUrl}/crm/v3/objects/contacts/${contactId}/associations/deals`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.hubspotConfig.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, deals: data.results };
      } else {
        throw new Error('Error al obtener deals');
      }
    } catch (error) {
      console.error('CRM Get Deals Error:', error);
      return { success: false, message: 'Error al obtener deals' };
    }
  }

  // Track page view
  async trackPageView(pageData) {
    try {
      const response = await fetch(`${this.hubspotConfig.baseUrl}/analytics/v2/events`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.hubspotConfig.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventType: 'page_view',
          occurredAt: new Date().toISOString(),
          properties: {
            page_url: pageData.url,
            page_title: pageData.title,
            referrer: pageData.referrer
          }
        })
      });

      return response.ok;
    } catch (error) {
      console.error('CRM Track Page View Error:', error);
      return false;
    }
  }

  // Send email via HubSpot
  async sendEmail(emailData) {
    try {
      const response = await fetch(`${this.hubspotConfig.baseUrl}/marketing/v3/transactional/single-email/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.hubspotConfig.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: emailData.to,
          from: emailData.from,
          subject: emailData.subject,
          html: emailData.html,
          text: emailData.text
        })
      });

      if (response.ok) {
        return { success: true, message: 'Email enviado' };
      } else {
        throw new Error('Error al enviar email');
      }
    } catch (error) {
      console.error('CRM Send Email Error:', error);
      return { success: false, message: 'Error al enviar email' };
    }
  }
}

// Export singleton instance
export const crmService = new CRMService();

// Usage examples:
/*
// Submit contact form
const result = await crmService.submitContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  service: 'marketing-digital',
  message: 'Interested in your services'
});

// Create contact
const contact = await crmService.createContact({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  company: 'Example Corp',
  jobTitle: 'Marketing Manager'
});

// Create deal
const deal = await crmService.createDeal({
  name: 'Marketing Campaign Project',
  amount: 5000,
  description: 'Full marketing campaign for Q1',
  contactId: contact.contactId
});
*/
