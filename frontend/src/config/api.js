// API Configuration for Growth Bizon
const API_CONFIG = {
  // Development
  development: {
    baseURL: 'http://localhost:8000',
    apiURL: 'http://localhost:8000'
  },
  
  // Production
  production: {
    baseURL: 'https://api.growthbizon.com',
    apiURL: 'https://api.growthbizon.com'
  }
};

// Get current environment
const isDevelopment = import.meta.env.DEV;
const config = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

export const API_BASE_URL = config.baseURL;
export const API_URL = config.apiURL;

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  
  // Users
  USERS: '/users',
  USER_PROFILE: '/users/me',
  
  // Services
  SERVICES: '/services',
  SERVICE_BY_ID: (id) => `/services/${id}`,
  
  // Client Services
  CLIENT_SERVICES: '/client-services',
  CLIENT_SERVICE_BY_ID: (id) => `/client-services/${id}`,
  
  // Admin
  CREATE_ADMIN: '/admin/create-admin',
  
  // Health
  HEALTH: '/health'
};

export default config;
