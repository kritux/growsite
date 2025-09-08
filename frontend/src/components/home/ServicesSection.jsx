import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaSearch, 
  FaRobot, 
  FaBrain, 
  FaCode, 
  FaChartLine,
  FaArrowRight,
  FaStar,
  FaRocket,
  FaUsers,
  FaTrophy,
  FaClock,
  FaShieldAlt,
  FaHeadset
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaInstagram className="w-8 h-8" />,
      title: "Gestión de Redes Sociales",
      description: "Manejo completo de redes sociales para tu negocio",
      features: ["Estrategia de contenido", "Diseño de posts", "Programación", "Análisis de resultados"],
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-600/10",
      borderColor: "border-pink-500/20"
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "SEO y Optimización",
      description: "Mejora el posicionamiento de tu sitio web",
      features: ["Auditoría SEO", "Optimización on-page", "Link building", "Monitoreo continuo"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-600/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI Automatización",
      description: "Automatiza procesos con inteligencia artificial",
      features: ["Chatbots inteligentes", "Automatización de emails", "Análisis predictivo", "Optimización automática"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "AI Agents",
      description: "Agentes inteligentes para tu negocio",
      features: ["Asistentes virtuales", "Análisis de datos", "Toma de decisiones", "Aprendizaje continuo"],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-purple-600/10",
      borderColor: "border-indigo-500/20"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Sitios web modernos y funcionales",
      features: ["Diseño responsive", "Optimización SEO", "Integración de APIs", "Mantenimiento"],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Gestión de ADS",
      description: "Campañas publicitarias efectivas",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "ROI tracking"],
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-600/10",
      borderColor: "border-yellow-500/20"
    }
  ];

  const benefits = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Crecimiento Acelerado",
      description: "Aumenta tus ventas hasta un 300% en los primeros 6 meses",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Más Clientes",
      description: "Atrae y convierte más clientes potenciales con estrategias probadas",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Ventaja Competitiva",
      description: "Destaca sobre tu competencia con tecnología de vanguardia",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Ahorro de Tiempo",
      description: "Automatiza procesos y enfócate en lo que realmente importa",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Resultados Garantizados",
      description: "Trabajamos hasta lograr tus objetivos o te devolvemos tu inversión",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Soporte 24/7",
      description: "Equipo dedicado disponible cuando lo necesites",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const portfolio = [
    {
      title: "Restaurante El Sabor",
      category: "Redes Sociales",
      result: "+200% ventas",
      image: "bg-gradient-to-br from-pink-500 to-purple-600"
    },
    {
      title: "TechStart Solutions",
      category: "SEO & Web",
      result: "+150% tráfico",
      image: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      title: "Boutique Fashion",
      category: "Branding",
      result: "+300% engagement",
      image: "bg-gradient-to-br from-green-500 to-emerald-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-bizon-light-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-bizon-blue/10 text-bizon-blue rounded-full text-sm font-medium mb-4 border border-bizon-blue/20"
          >
            <FaStar className="mr-2 w-4 h-4" />
            Servicios Premium
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bizon-dark-blue mb-4 sm:mb-6">
            Soluciones{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-blue to-bizon-accent">
              Integrales
            </span>{' '}
            para tu Negocio
          </h2>
          
          <p className="text-lg sm:text-xl text-bizon-gray max-w-3xl mx-auto leading-relaxed">
            Desde estrategias de redes sociales hasta desarrollo web avanzado, 
            ofrecemos soluciones personalizadas que impulsan tu crecimiento digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Service Card */}
              <div className={`relative h-full ${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full blur-2xl`}></div>
                </div>

                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-bizon-dark-blue mb-3 group-hover:text-bizon-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-bizon-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-bizon-gray">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>


                  {/* CTA Button */}
                  <Link
                    to="/servicios"
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                  >
                    Saber Más
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 sm:mt-24"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bizon-dark-blue mb-4 sm:mb-6">
              ¿Por qué elegir{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-blue to-bizon-accent">
                Growth Bizon
              </span>?
            </h2>
            <p className="text-lg sm:text-xl text-bizon-gray max-w-3xl mx-auto leading-relaxed">
              Descubre los beneficios que obtienes al trabajar con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-bizon-dark-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-bizon-gray leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 sm:mt-24"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bizon-dark-blue mb-4 sm:mb-6">
              Nuestro{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-blue to-bizon-accent">
                Portafolio
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-bizon-gray max-w-3xl mx-auto leading-relaxed">
              Casos de éxito que demuestran nuestro compromiso con resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <FaRocket className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="text-sm text-bizon-blue font-semibold mb-2">{project.category}</div>
                  <div className="text-2xl font-bold text-bizon-dark-blue">{project.result}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-gradient-to-r from-bizon-blue to-bizon-accent text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Portafolio Completo
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-bizon-dark-blue to-bizon-blue rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para Impulsar tu Negocio?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para crear una estrategia 
              personalizada que transforme tu presencia digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-bizon-dark-blue hover:bg-bizon-light-gray px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Consulta Gratuita
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-bizon-dark-blue px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Ver Nuestro Trabajo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
