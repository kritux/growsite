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
  FaStar
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaInstagram,
      title: "Gestión de Redes Sociales",
      description: "Creamos contenido atractivo y gestionamos tus redes sociales para aumentar el engagement y la visibilidad de tu marca.",
      features: [
        "Contenido personalizado y creativo",
        "Programación automática de publicaciones",
        "Análisis detallado de métricas",
        "Respuesta a comentarios y mensajes",
        "Estrategias de crecimiento orgánico",
        "Campañas publicitarias en redes sociales"
      ],
      price: "Desde $500/mes",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-600/10",
      borderColor: "border-pink-500/20"
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Marketing Digital",
      description: "Estrategias integrales de marketing digital para aumentar las ventas y el ROI de tu negocio.",
      features: [
        "SEO y optimización para motores de búsqueda",
        "Campañas de Google Ads y Facebook Ads",
        "Email Marketing automatizado",
        "Analytics avanzado y reportes",
        "Optimización de conversiones",
        "Estrategias de remarketing"
      ],
      price: "Desde $800/mes",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-600/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 3,
      icon: FaUsers,
      title: "Consultoría Estratégica",
      description: "Asesoramiento personalizado para optimizar tu presencia digital y alcanzar tus objetivos de negocio.",
      features: [
        "Análisis completo de mercado y competencia",
        "Estrategia personalizada de crecimiento",
        "Roadmap detallado de implementación",
        "Seguimiento continuo y optimización",
        "Auditoría de presencia digital",
        "Capacitación para tu equipo"
      ],
      price: "Desde $1,200/mes",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 4,
      icon: FaRocket,
      title: "Branding y Diseño",
      description: "Desarrollamos la identidad visual de tu marca para que destaque en el mercado digital.",
      features: [
        "Logo y identidad visual completa",
        "Material promocional y publicitario",
        "Diseño web responsive",
        "Brand guidelines y manual de marca",
        "Diseño de packaging",
        "Ilustraciones y gráficos personalizados"
      ],
      price: "Desde $600/mes",
      color: "from-bizon-accent to-bizon-blue",
      bgColor: "bg-gradient-to-br from-bizon-accent/10 to-bizon-blue/10",
      borderColor: "border-bizon-accent/20"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Restaurante El Sabor",
      text: "Growth Bizon transformó completamente nuestra presencia en redes sociales. En 3 meses aumentamos nuestras ventas un 200%.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      company: "TechStart Solutions",
      text: "La consultoría estratégica nos ayudó a definir una hoja de ruta clara. Ahora tenemos una estrategia digital sólida y medible.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      company: "Boutique Fashion",
      text: "El branding y diseño superaron nuestras expectativas. Nuestra marca ahora tiene una identidad visual profesional y memorable.",
      rating: 5
    }
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
              Nuestros Servicios
            </h1>
            <p className="text-lg sm:text-xl text-bizon-gray max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales de marketing digital para impulsar el crecimiento de tu negocio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.bgColor} ${service.borderColor} border rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-bizon-dark-blue mb-2">
                      {service.title}
                    </h3>
                    <p className="text-bizon-gray text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-bizon-dark-blue mb-3 sm:mb-4">
                    Incluye:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <FaCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-bizon-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                  <div className="text-2xl sm:text-3xl font-bold text-bizon-dark-blue">
                    {service.price}
                  </div>
                  <button className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
                    Solicitar Cotización
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
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
                className="bg-bizon-light-gray rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
              >
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
                <div>
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
