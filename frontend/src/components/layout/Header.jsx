import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logoLogin from '../../assets/logo_login.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-bizon-dark-blue to-bizon-blue rounded-lg flex items-center justify-center shadow-md">
                <img
                  src={logoLogin}
                  alt="Growth Bizon LLC"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-bizon-dark-blue">
                Growth Bizon LLC
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/"
                className="text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Inicio
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/servicios"
                className="text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Servicios
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/acerca"
                className="text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Acerca de
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/contacto"
                className="text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Contacto
              </Link>
            </motion.div>
          </nav>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <Link
                  to="/dashboard"
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-bizon-gray hover:text-bizon-dark-blue transition-colors duration-300"
                >
                  <FaUser className="w-5 h-5" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <Link
                  to="/login"
                  className="text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-sm px-4 py-2"
                >
                  Registrarse
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={toggleMenu}
            className="md:hidden text-bizon-dark-blue hover:text-bizon-blue transition-colors duration-300"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-bizon-light-gray"
          >
            <div className="py-4 space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className="block text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                onClick={closeMenu}
                className="block text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Servicios
              </Link>
              <Link
                to="/acerca"
                onClick={closeMenu}
                className="block text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Acerca de
              </Link>
              <Link
                to="/contacto"
                onClick={closeMenu}
                className="block text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
              >
                Contacto
              </Link>
              
              <div className="pt-4 border-t border-bizon-light-gray">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <Link
                      to="/dashboard"
                      onClick={closeMenu}
                      className="block btn-secondary text-center"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left text-bizon-gray hover:text-bizon-dark-blue transition-colors duration-300"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={closeMenu}
                      className="block text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors duration-300"
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      to="/register"
                      onClick={closeMenu}
                      className="block btn-primary text-center"
                    >
                      Registrarse
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
