import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';
import logoLogin from '../../assets/logo_login.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Gestión de Redes Sociales", href: "/servicios" },
      { name: "Marketing Digital", href: "/servicios" },
      { name: "Consultoría Estratégica", href: "/servicios" },
      { name: "Branding y Diseño", href: "/servicios" }
    ],
    empresa: [
      { name: "Acerca de Nosotros", href: "/acerca" },
      { name: "Nuestro Equipo", href: "/acerca" },
      { name: "Casos de Éxito", href: "/casos-exito" },
      { name: "Blog", href: "/blog" }
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "/ayuda" },
      { name: "FAQ", href: "/faq" },
      { name: "Contacto", href: "/contacto" },
      { name: "Soporte Técnico", href: "/soporte" }
    ]
  };

  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-bizon-dark-blue text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-bizon-blue to-bizon-light-blue rounded-lg flex items-center justify-center shadow-md">
                  <img
                    src={logoLogin}
                    alt="Growth Bizon LLC"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">
                  Growth Bizon LLC
                </span>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mb-6 leading-relaxed"
            >
              Somos tu socio estratégico en marketing digital. Transformamos 
              tu presencia online y te ayudamos a alcanzar tus objetivos 
              de crecimiento con soluciones personalizadas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-bizon-accent" />
                <a 
                  href="mailto:info@growthbizon.com"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  info@growthbizon.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-bizon-accent" />
                <a 
                  href="tel:+14029540039"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  +1 (402) 954-0039
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-bizon-accent" />
                <span className="text-white/80">
                  Duncan, Nebraska - Estados Unidos
                </span>
              </div>
            </motion.div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="/servicios#redes-sociales" className="text-gray-300 hover:text-white transition-colors duration-300">Gestión de Redes Sociales</a></li>
              <li><a href="/servicios#seo" className="text-gray-300 hover:text-white transition-colors duration-300">SEO y Optimización</a></li>
              <li><a href="/servicios#ai" className="text-gray-300 hover:text-white transition-colors duration-300">AI Automatización</a></li>
              <li><a href="/servicios#web" className="text-gray-300 hover:text-white transition-colors duration-300">Desarrollo Web</a></li>
              <li><a href="/servicios#ads" className="text-gray-300 hover:text-white transition-colors duration-300">Gestión de ADS</a></li>
            </ul>
          </div>
          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="/nosotros" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">Nuestro Trabajo</a></li>
              <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</a></li>
              <li><a href="/servicios" className="text-gray-300 hover:text-white transition-colors duration-300">Servicios</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-bizon-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-white/80 font-medium">Síguenos:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-bizon-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-4">
              <span className="text-white/80 font-medium">Newsletter:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-bizon-accent focus:border-transparent transition-all duration-300"
                />
                <button className="px-4 py-2 bg-bizon-accent hover:bg-yellow-600 rounded-r-lg transition-colors duration-300">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm"
            >
              © {currentYear} Growth Bizon LLC. Todos los derechos reservados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm"
            >
              <Link
                to="/privacidad"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/terminos"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Términos de Servicio
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-bizon-accent hover:bg-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Volver arriba"
      >
        <FaArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
