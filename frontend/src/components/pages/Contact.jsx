import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../layout/Header';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } else {
      setError("Por favor, completa todos los campos requeridos.");
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "info@growthbizon.com",
      link: "mailto:info@growthbizon.com",
      description: "Envíanos un email"
    },
    {
      icon: FaPhone,
      title: "Teléfono",
      value: "+1 (402) 954-0039",
      link: "tel:+14029540039",
      description: "Llámanos directamente"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+1 (402) 954-0039",
      link: "https://wa.me/14029540039",
      description: "Chatea con nosotros"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Ubicación",
      value: "Duncan, Nebraska - Estados Unidos",
      link: "https://maps.google.com/?q=Duncan,Nebraska,USA",
      description: "Nuestra oficina"
    },
    {
      icon: FaClock,
      title: "Horario",
      value: "Lun - Vie: 9:00 AM - 6:00 PM CST",
      link: "#",
      description: "Horarios de atención"
    }
  ];

  const socialMedia = [
    { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: FaFacebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bizon-light-gray via-white to-bizon-light-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bizon-dark-blue mb-4 sm:mb-6">
              Contáctanos
            </h1>
            <p className="text-lg sm:text-xl text-bizon-gray max-w-3xl mx-auto leading-relaxed">
              ¿Listo para impulsar tu negocio? Estamos aquí para ayudarte a alcanzar tus objetivos de marketing digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-bizon-dark-blue mb-6 sm:mb-8">
                Envíanos un mensaje
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-bizon-dark-blue mb-2">
                    ¡Mensaje enviado exitosamente!
                  </h3>
                  <p className="text-bizon-gray">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-bizon-dark-blue mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-bizon-light-gray rounded-xl focus:ring-2 focus:ring-bizon-blue focus:border-transparent transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-bizon-dark-blue mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-bizon-light-gray rounded-xl focus:ring-2 focus:ring-bizon-blue focus:border-transparent transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-bizon-dark-blue mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-bizon-light-gray rounded-xl focus:ring-2 focus:ring-bizon-blue focus:border-transparent transition-all duration-300"
                        placeholder="+1 (402) 954-0039"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-bizon-dark-blue mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-bizon-light-gray rounded-xl focus:ring-2 focus:ring-bizon-blue focus:border-transparent transition-all duration-300"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bizon-dark-blue mb-2">
                      Servicio de interés
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-bizon-light-gray rounded-xl focus:ring-2 focus:ring-bizon-blue focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="redes-sociales">Gestión de Redes Sociales</option>
                      <option value="marketing-digital">Marketing Digital</option>
                      <option value="consultoria">Consultoría Estratégica</option>
                      <option value="branding">Branding y Diseño</option>
                      <option value="web-development">Desarrollo Web</option>
                      <option value="seo">SEO y Optimización</option>
                      <option value="ads">Gestión de Anuncios</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bizon-dark-blue mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-bizon-light-gray rounded-xl focus:ring-2 focus:ring-bizon-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-bizon-blue hover:bg-bizon-dark-blue text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3" />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-bizon-dark-blue mb-6 sm:mb-8">
                  Información de contacto
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-bizon-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-bizon-dark-blue text-lg">
                          {info.title}
                        </h3>
                        <p className="text-bizon-gray text-sm sm:text-base">
                          {info.value}
                        </p>
                        <p className="text-bizon-blue text-sm font-medium">
                          {info.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-bizon-dark-blue mb-4 sm:mb-6">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 bg-bizon-light-gray rounded-xl flex items-center justify-center hover:bg-bizon-blue transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-bizon-dark-blue" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <h3 className="text-lg font-bold text-bizon-dark-blue mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bizon-blue">50+</div>
                    <div className="text-bizon-gray text-sm">Clientes Satisfechos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bizon-blue">200%</div>
                    <div className="text-bizon-gray text-sm">Crecimiento Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bizon-blue">24/7</div>
                    <div className="text-bizon-gray text-sm">Soporte Disponible</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bizon-blue">5+</div>
                    <div className="text-bizon-gray text-sm">Años de Experiencia</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-bizon-dark-blue mb-4">
              Nuestra ubicación
            </h2>
            <p className="text-bizon-gray text-lg">
              Visítanos en nuestras oficinas
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bizon-light-gray rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-bizon-blue to-bizon-dark-blue flex items-center justify-center">
              <div className="text-center text-white">
                <FaMapMarkerAlt className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Duncan, Nebraska</h3>
                <p className="text-white/80">
                  Nuestra ubicación en Estados Unidos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
