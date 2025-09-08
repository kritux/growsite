import { useState, useCallback } from 'react';
import { crmService } from '../services/crmService';

export const useCRM = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Submit contact form
  const submitContactForm = useCallback(async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await crmService.submitContactForm(formData);
      
      if (result.success) {
        return { success: true, message: result.message };
      } else {
        setError(result.message);
        return { success: false, message: result.message };
      }
    } catch (err) {
      const errorMessage = 'Error al enviar el formulario';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Create contact
  const createContact = useCallback(async (contactData) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await crmService.createContact(contactData);
      
      if (result.success) {
        return { success: true, contactId: result.contactId };
      } else {
        setError(result.message);
        return { success: false, message: result.message };
      }
    } catch (err) {
      const errorMessage = 'Error al crear contacto';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Create deal
  const createDeal = useCallback(async (dealData) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await crmService.createDeal(dealData);
      
      if (result.success) {
        return { success: true, dealId: result.dealId };
      } else {
        setError(result.message);
        return { success: false, message: result.message };
      }
    } catch (err) {
      const errorMessage = 'Error al crear deal';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Get contact by email
  const getContactByEmail = useCallback(async (email) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await crmService.getContactByEmail(email);
      
      if (result.success) {
        return { success: true, contact: result.contact };
      } else {
        setError(result.message);
        return { success: false, message: result.message };
      }
    } catch (err) {
      const errorMessage = 'Error al obtener contacto';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Update contact
  const updateContact = useCallback(async (contactId, updateData) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await crmService.updateContact(contactId, updateData);
      
      if (result.success) {
        return { success: true, message: result.message };
      } else {
        setError(result.message);
        return { success: false, message: result.message };
      }
    } catch (err) {
      const errorMessage = 'Error al actualizar contacto';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Get contact deals
  const getContactDeals = useCallback(async (contactId) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await crmService.getContactDeals(contactId);
      
      if (result.success) {
        return { success: true, deals: result.deals };
      } else {
        setError(result.message);
        return { success: false, message: result.message };
      }
    } catch (err) {
      const errorMessage = 'Error al obtener deals';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Track page view
  const trackPageView = useCallback(async (pageData) => {
    try {
      await crmService.trackPageView(pageData);
    } catch (err) {
      console.error('Error tracking page view:', err);
    }
  }, []);

  // Send email
  const sendEmail = useCallback(async (emailData) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await crmService.sendEmail(emailData);
      
      if (result.success) {
        return { success: true, message: result.message };
      } else {
        setError(result.message);
        return { success: false, message: result.message };
      }
    } catch (err) {
      const errorMessage = 'Error al enviar email';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    submitContactForm,
    createContact,
    createDeal,
    getContactByEmail,
    updateContact,
    getContactDeals,
    trackPageView,
    sendEmail,
    clearError
  };
};
