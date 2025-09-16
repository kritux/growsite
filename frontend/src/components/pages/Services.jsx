import { motion } from 'framer-motion';
import Header from '../layout/Header';
import { 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaChartLine, 
  FaUsers, 
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaCode,
  FaRobot,
  FaPalette,
  FaMobile,
  FaCog,
  FaClock,
  FaDollarSign,
  FaShieldAlt,
  FaHeadset,
  FaTrophy,
  FaLightbulb,
  FaGlobe,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaInstagram,
      title: "Gestión de Redes Sociales",
      description: "Creamos contenido atractivo y gestionamos tus redes sociales para aumentar el engagement y la visibilidad de tu marca.",
      detailedDescription: "Nuestro equipo de especialistas en redes sociales desarrolla estrategias personalizadas para cada plataforma, creando contenido que conecta con tu audiencia y genera resultados medibles.",
      features: [
        "Contenido personalizado y creativo",
        "Programación automática de publicaciones",
        "Análisis detallado de métricas",
        "Respuesta a comentarios y mensajes",
        "Estrategias de crecimiento orgánico",
        "Campañas publicitarias en redes sociales"
      ],
      platforms: ["Instagram", "Facebook", "LinkedIn", "TikTok", "Twitter"],
      deliverables: [
        "Estrategia de contenido mensual",
        "15-20 posts por plataforma",
        "Stories diarios",
        "Reporte de métricas semanal",
        "Respuesta a mensajes en 24h"
      ],
      price: "Desde $500/mes",
      duration: "3-12 meses",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-600/10",
      borderColor: "border-pink-500/20"
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Marketing Digital",
      description: "Estrategias integrales de marketing digital para aumentar las ventas y el ROI de tu negocio.",
      detailedDescription: "Desarrollamos campañas omnicanal que integran todas las plataformas digitales para maximizar tu alcance y conversiones, utilizando las últimas tecnologías y herramientas de automatización.",
      features: [
        "CRM e integración de leads con GoHighLevel",
        "Campañas de Google Ads y Facebook Ads",
        "Email Marketing automatizado",
        "Analytics avanzado y reportes",
        "Optimización de conversiones",
        "Estrategias de remarketing"
      ],
      platforms: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Email Marketing"],
      deliverables: [
        "Configuración completa de GHL",
        "Campañas publicitarias optimizadas",
        "Automatización de email marketing",
        "Reportes de ROI mensuales",
        "Optimización continua"
      ],
      price: "Desde $800/mes",
      duration: "6-12 meses",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-600/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 3,
      icon: FaUsers,
      title: "CRM e Integración de Leads",
      description: "Automatiza y gestiona tus leads con GoHighLevel para maximizar conversiones y optimizar tu funnel de ventas.",
      detailedDescription: "Configuramos y optimizamos GoHighLevel para automatizar completamente tu proceso de captación y seguimiento de leads, integrando todas tus fuentes de tráfico en un solo sistema.",
      features: [
        "Configuración completa de GoHighLevel",
        "Automatización de secuencias de email",
        "Integración con landing pages",
        "Seguimiento de conversiones",
        "Reportes detallados de ROI",
        "Capacitación para tu equipo"
      ],
      platforms: ["GoHighLevel", "Landing Pages", "Email Marketing", "SMS Marketing", "Calendarios"],
      deliverables: [
        "Setup completo de GHL",
        "Automatizaciones personalizadas",
        "Landing pages optimizadas",
        "Secuencias de email",
        "Dashboard de métricas",
        "Capacitación del equipo"
      ],
      price: "Desde $1,000/mes",
      duration: "3-6 meses",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-indigo-600/10",
      borderColor: "border-purple-500/20"
    },
    {
      id: 4,
      icon: FaCode,
      title: "Desarrollo Web",
      description: "Sitios web modernos, rápidos y optimizados para conversión que impulsan tu negocio digital.",
      detailedDescription: "Desarrollamos sitios web que no solo se ven increíbles, sino que están optimizados para conversión, SEO y rendimiento, utilizando las últimas tecnologías web.",
      features: [
        "Diseño responsive y moderno",
        "Optimización SEO técnica",
        "Velocidad de carga optimizada",
        "Integración con CRM y analytics",
        "Panel administrativo personalizado",
        "Mantenimiento y actualizaciones"
      ],
      platforms: ["React", "Next.js", "WordPress", "Shopify", "Webflow"],
      deliverables: [
        "Sitio web completamente funcional",
        "Optimización SEO completa",
        "Integración con herramientas",
        "Capacitación para administración",
        "Soporte técnico 24/7"
      ],
      price: "Desde $1,500/proyecto",
      duration: "4-8 semanas",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 5,
      icon: FaPalette,
      title: "Branding y Diseño",
      description: "Desarrollamos la identidad visual de tu marca para que destaque en el mercado digital.",
      detailedDescription: "Creamos una identidad visual cohesiva y memorable que refleja los valores de tu marca y conecta emocionalmente con tu audiencia objetivo.",
      features: [
        "Logo y identidad visual completa",
        "Material promocional y publicitario",
        "Diseño web responsive",
        "Brand guidelines y manual de marca",
        "Diseño de packaging",
        "Ilustraciones y gráficos personalizados"
      ],
      platforms: ["Adobe Creative Suite", "Figma", "Canva Pro", "Print Design", "Digital Design"],
      deliverables: [
        "Logo en múltiples formatos",
        "Paleta de colores y tipografías",
        "Manual de marca completo",
        "Materiales promocionales",
        "Templates para redes sociales"
      ],
      price: "Desde $800/proyecto",
      duration: "2-4 semanas",
      color: "from-bizon-accent to-bizon-blue",
      bgColor: "bg-gradient-to-br from-bizon-accent/10 to-bizon-blue/10",
      borderColor: "border-bizon-accent/20"
    },
    {
      id: 6,
      icon: FaRobot,
      title: "AI Automatización",
      description: "Automatiza procesos con inteligencia artificial para optimizar operaciones y mejorar la experiencia del cliente.",
      detailedDescription: "Implementamos soluciones de IA que automatizan tareas repetitivas, mejoran la atención al cliente y optimizan procesos internos para aumentar la eficiencia de tu negocio.",
      features: [
        "Chatbots inteligentes",
        "Automatización de emails",
        "Análisis predictivo",
        "Optimización automática",
        "Integración con sistemas existentes",
        "Monitoreo y mejora continua"
      ],
      platforms: ["OpenAI", "Zapier", "Make.com", "Custom AI", "API Integrations"],
      deliverables: [
        "Chatbot personalizado",
        "Automatizaciones configuradas",
        "Dashboard de monitoreo",
        "Capacitación del equipo",
        "Soporte técnico continuo"
      ],
      price: "Desde $1,200/mes",
      duration: "2-3 meses",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/10",
      borderColor: "border-orange-500/20"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Restaurante El Sabor",
      text: "Growth Bizon transformó completamente nuestra presencia en redes sociales. En 3 meses aumentamos nuestras ventas un 200% y ahora tenemos una comunidad fiel de clientes.",
      rating: 5,
      service: "Redes Sociales"
    },
    {
      name: "Carlos Rodríguez",
      company: "TechStart Solutions",
      text: "La configuración de GoHighLevel que hicieron fue increíble. Automatizamos completamente nuestro proceso de leads y aumentamos las conversiones un 150%.",
      rating: 5,
      service: "CRM e Integración"
    },
    {
      name: "Ana Martínez",
      company: "Boutique Fashion",
      text: "El branding y diseño superaron nuestras expectativas. Nuestra marca ahora tiene una identidad visual profesional que conecta perfectamente con nuestro público objetivo.",
      rating: 5,
      service: "Branding y Diseño"
    },
    {
      name: "Luis Pérez",
      company: "Consultoría Empresarial",
      text: "El desarrollo web fue excepcional. Nuestro sitio carga súper rápido, está optimizado para SEO y genera leads constantemente. Excelente trabajo técnico.",
      rating: 5,
      service: "Desarrollo Web"
    },
    {
      name: "Sofia Herrera",
      company: "Clínica Dental",
      text: "La automatización con IA que implementaron ha revolucionado nuestra atención al cliente. Los chatbots responden perfectamente y nuestros pacientes están encantados.",
      rating: 5,
      service: "AI Automatización"
    },
    {
      name: "Roberto Silva",
      company: "Inmobiliaria Premium",
      text: "Las campañas de marketing digital que manejan son increíbles. Hemos triplicado nuestros leads calificados y el ROI es espectacular. Definitivamente los recomiendo.",
      rating: 5,
      service: "Marketing Digital"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-bizon-light-blue/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bizon-dark-blue via-bizon-blue to-bizon-light-blue relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-bizon-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-accent to-bizon-blue">
                Servicios
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales de marketing digital para impulsar el crecimiento de tu negocio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.bgColor} ${service.borderColor} border rounded-3xl p-8 sm:p-10 lg:p-12 hover:shadow-2xl transition-all duration-300`}
              >
                {/* Service Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-bizon-dark-blue mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-bizon-gray leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-base text-bizon-gray/80 leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>
                </div>

                {/* Service Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-bizon-dark-blue mb-4 flex items-center">
                      <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                      Características
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <FaCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-bizon-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms */}
                  <div>
                    <h4 className="text-xl font-bold text-bizon-dark-blue mb-4 flex items-center">
                      <FaGlobe className="w-5 h-5 text-blue-500 mr-2" />
                      Plataformas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="px-3 py-1 bg-white/50 rounded-full text-sm text-bizon-dark-blue border border-bizon-light-gray">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xl font-bold text-bizon-dark-blue mb-4 flex items-center">
                      <FaTrophy className="w-5 h-5 text-yellow-500 mr-2" />
                      Entregables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start space-x-2">
                          <FaArrowRight className="w-3 h-3 text-bizon-blue mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-bizon-gray">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing and Duration */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 bg-white/30 rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-2">
                      <FaDollarSign className="w-5 h-5 text-green-500" />
                      <span className="text-2xl sm:text-3xl font-bold text-bizon-dark-blue">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaClock className="w-5 h-5 text-blue-500" />
                      <span className="text-lg text-bizon-gray">
                        Duración: {service.duration}
                      </span>
                    </div>
                  </div>
                  <button className="btn-primary text-base px-8 py-3 w-full sm:w-auto">
                    Solicitar Cotización
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-bizon-light-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-bizon-dark-blue mb-4">
              ¿Por qué elegir Growth Bizon?
            </h2>
            <p className="text-lg sm:text-xl text-bizon-gray max-w-3xl mx-auto">
              Somos más que una agencia de marketing digital, somos tu socio estratégico para el crecimiento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-bizon-blue to-bizon-dark-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-bizon-dark-blue mb-3">
                Resultados Comprobados
              </h3>
              <p className="text-bizon-gray">
                Más de 50+ proyectos exitosos con clientes que han aumentado sus ventas hasta 300%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-bizon-dark-blue mb-3">
                Soporte 24/7
              </h3>
              <p className="text-bizon-gray">
                Atención personalizada y soporte técnico disponible cuando lo necesites
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-bizon-dark-blue mb-3">
                Estrategias Innovadoras
              </h3>
              <p className="text-bizon-gray">
                Utilizamos las últimas tecnologías y tendencias del mercado digital
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-bizon-dark-blue mb-3">
                Garantía de Calidad
              </h3>
              <p className="text-bizon-gray">
                Garantizamos resultados o te devolvemos tu dinero en los primeros 30 días
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-bizon-dark-blue mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg sm:text-xl text-bizon-gray max-w-2xl mx-auto">
              Descubre cómo hemos ayudado a otros negocios a alcanzar sus objetivos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-bizon-light-gray"
              >
                {/* Service Badge */}
                <div className="inline-block bg-gradient-to-r from-bizon-blue to-bizon-dark-blue text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {testimonial.service}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-bizon-blue" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-bizon-gray text-sm sm:text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-bizon-light-gray pt-4">
                  <div className="font-semibold text-bizon-dark-blue text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-bizon-gray text-xs sm:text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-bizon-blue to-bizon-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Contáctanos hoy mismo para obtener una consulta gratuita y descubrir cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-bizon-dark-blue hover:bg-bizon-light-gray text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Solicitar Consulta Gratuita
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bizon-dark-blue text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Ver Portafolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
