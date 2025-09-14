import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaUser
} from 'react-icons/fa';
import logoLogin from '../../assets/logo_login.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Inicio', href: '/', current: location.pathname === '/' },
    { name: 'Servicios', href: '/servicios', current: location.pathname === '/servicios' },
    { name: 'Portfolio', href: '/portfolio', current: location.pathname === '/portfolio' },
    { name: 'Nosotros', href: '/nosotros', current: location.pathname === '/nosotros' },
    { name: 'Contacto', href: '/contacto', current: location.pathname === '/contacto' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 relative z-10"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br from-bizon-blue to-bizon-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative z-10 ${
                  isScrolled ? 'shadow-lg' : 'shadow-2xl'
                }`}>
                  <img
                    src={logoLogin}
                    alt="Growth Bizon LLC"
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain relative z-10"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className={`text-xl sm:text-2xl font-bold ${
                  isScrolled ? 'text-bizon-dark-blue' : 'text-white'
                } group-hover:text-bizon-blue transition-colors duration-300`}>
                  Growth Bizon
                </div>
                <div className={`text-xs sm:text-sm ${
                  isScrolled ? 'text-bizon-gray' : 'text-white/80'
                }`}>
                  Digital Marketing Agency
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  item.current
                    ? 'text-bizon-blue bg-bizon-blue/10'
                    : isScrolled
                    ? 'text-bizon-dark-blue hover:text-bizon-blue hover:bg-gray-100'
                    : 'text-white hover:text-bizon-accent hover:bg-white/10'
                }`}
              >
                {item.name}
                {item.current && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-bizon-blue/10 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Login Button */}
            <Link
              to="/login"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-bizon-blue hover:text-bizon-dark-blue hover:bg-bizon-blue/10'
                  : 'text-white hover:text-bizon-accent hover:bg-white/10'
              }`}
            >
              <FaUser className="w-4 h-4 inline mr-2" />
              Ingresar
            </Link>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contacto"
                className="px-6 py-2 bg-gradient-to-r from-bizon-blue to-bizon-accent text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Consulta Gratuita
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-bizon-dark-blue hover:text-bizon-blue hover:bg-gray-100'
                  : 'text-white hover:text-bizon-accent hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    item.current
                      ? 'text-bizon-blue bg-bizon-blue/10'
                      : 'text-bizon-dark-blue hover:text-bizon-blue hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Link
                  to="/contacto"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-bizon-blue to-bizon-accent text-white font-medium rounded-lg shadow-lg"
                >
                  Consulta Gratuita
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
