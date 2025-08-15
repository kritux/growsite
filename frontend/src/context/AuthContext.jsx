import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si hay usuario guardado al cargar
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Función de registro
  const register = async (userData) => {
    try {
      // Simular delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Crear usuario
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        role: 'cliente'
      };
      
      const token = 'token_' + Date.now();
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      setUser(newUser);
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Error en registro:', error);
      return { success: false, error: 'Error al registrar usuario' };
    }
  };

  // Función de login
  const login = async (credentials) => {
    try {
      // Simular delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Usuarios de prueba
      const mockUsers = [
        {
          id: 1,
          name: 'Admin User',
          email: 'admin@growthbizon.com',
          password: 'admin123',
          role: 'admin'
        },
        {
          id: 2,
          name: 'Cliente Demo',
          email: 'cliente@demo.com',
          password: 'cliente123',
          role: 'cliente'
        }
      ];
      
      // Buscar usuario
      const user = mockUsers.find(u => 
        u.email === credentials.email && u.password === credentials.password
      );
      
      if (!user) {
        return { success: false, error: 'Credenciales inválidas' };
      }
      
      // Crear usuario sin password
      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      };
      
      const token = 'token_' + Date.now();
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      setUser(userWithoutPassword);
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.error('Error en login:', error);
      return { success: false, error: 'Error al iniciar sesión' };
    }
  };

  // Función de logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
