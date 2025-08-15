import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaChartLine, 
  FaUsers, 
  FaRocket,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: FaInstagram,
      title: "Gestión de Redes Sociales",
      description: "Creamos contenido atractivo y gestionamos tus redes sociales para aumentar el engagement y la visibilidad de tu marca.",
      features: ["Contenido personalizado", "Programación automática", "Análisis de métricas", "Respuesta a comentarios"],
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-600/10",
      borderColor: "border-pink-500/20"
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Marketing Digital",
      description: "Estrategias integrales de marketing digital para aumentar las ventas y el ROI de tu negocio.",
      features: ["SEO y SEM", "Email Marketing", "Analytics avanzado", "Optimización de conversiones"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-600/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 3,
      icon: FaUsers,
      title: "Consultoría Estratégica",
      description: "Asesoramiento personalizado para optimizar tu presencia digital y alcanzar tus objetivos de negocio.",
      features: ["Análisis de mercado", "Estrategia personalizada", "Roadmap de crecimiento", "Seguimiento continuo"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 4,
      icon: FaRocket,
      title: "Branding y Diseño",
      description: "Desarrollamos la identidad visual de tu marca para que destaque en el mercado digital.",
      features: ["Logo y identidad visual", "Material promocional", "Diseño web", "Brand guidelines"],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/10",
      borderColor: "border-orange-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-bizon-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-bizon-blue bg-opacity-10 text-bizon-blue rounded-full text-sm font-medium mb-6"
          >
            <FaRocket className="mr-2" />
            Nuestros Servicios
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-bizon-dark-blue mb-6"
          >
            Soluciones que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-blue to-bizon-accent">
              transforman
            </span>{' '}
            tu negocio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-bizon-gray max-w-3xl mx-auto leading-relaxed"
          >
            Ofrecemos servicios integrales de marketing digital diseñados para impulsar 
            el crecimiento de tu empresa y maximizar tu presencia online.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl ${service.bgColor} border ${service.borderColor} hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-bizon-dark-blue mb-4 group-hover:text-bizon-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-bizon-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-bizon-gray">
                      <FaCheck className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/servicios"
                  className="inline-flex items-center text-bizon-blue hover:text-bizon-dark-blue font-semibold transition-colors duration-300 group-hover:translate-x-1"
                >
                  Saber más
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-bizon-dark-blue to-bizon-blue rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para impulsar tu crecimiento?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio 
              con nuestras estrategias personalizadas de marketing digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-bizon-dark-blue hover:bg-bizon-light-gray px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicitar Consulta Gratuita
              </Link>
              <Link
                to="/servicios"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bizon-dark-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Ver Todos los Servicios
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
