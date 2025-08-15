import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { FaEye, FaEyeSlash, FaRocket, FaArrowLeft } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    console.log('Intentando login con:', formData);

    try {
      const result = await login(formData);
      console.log('Resultado del login:', result);
      
      if (result.success) {
        setSuccess('¡Inicio de sesión exitoso!');
        setTimeout(() => {
          // Redirigir según el rol del usuario
          if (result.user.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/dashboard');
          }
        }, 1000);
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error('Error en login:', error);
      setError('Error inesperado. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bizon-light-gray via-white to-bizon-light-blue flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-bizon-blue to-bizon-light-blue rounded-2xl flex items-center justify-center">
              <FaRocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-bizon-dark-blue">
            Bienvenido de vuelta
          </h2>
          <p className="mt-2 text-bizon-gray">
            Inicia sesión en tu cuenta de Growth Bizon
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error/Success Messages */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                {success}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-bizon-dark-blue mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="tu@email.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-bizon-dark-blue mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-bizon-gray hover:text-bizon-dark-blue"
                >
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-lg font-semibold"
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-bizon-light-gray rounded-lg">
            <h4 className="text-sm font-semibold text-bizon-dark-blue mb-2">
              Credenciales de Demo:
            </h4>
            <div className="space-y-1 text-xs text-bizon-gray">
              <p><strong>Admin:</strong> admin@growthbizon.com / admin123</p>
              <p><strong>Cliente:</strong> cliente@demo.com / cliente123</p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 text-center">
            <p className="text-bizon-gray">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-bizon-blue hover:text-bizon-dark-blue font-medium">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center text-bizon-gray hover:text-bizon-dark-blue transition-colors"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
