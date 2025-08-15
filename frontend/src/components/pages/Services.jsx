import { motion } from 'framer-motion';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
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
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/10",
      borderColor: "border-orange-500/20"
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
      text: "La consultoría estratégica nos ayudó a definir una hoja de ruta clara. Ahora tenemos una estrategia digital sólida.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      company: "Boutique Elegance",
      text: "El branding que crearon para nosotros es increíble. Nuestros clientes nos reconocen inmediatamente.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-bizon-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-bizon-dark-blue to-bizon-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-accent to-yellow-300">
                Servicios
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales de marketing digital diseñadas para impulsar 
              el crecimiento de tu empresa y maximizar tu presencia online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-bizon-light-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${service.bgColor} border ${service.borderColor} hover:shadow-2xl transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-bizon-dark-blue">{service.title}</h3>
                    <p className="text-bizon-accent font-semibold">{service.price}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-bizon-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-bizon-gray">
                      <FaCheck className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full bg-bizon-blue hover:bg-bizon-dark-blue text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Solicitar Cotización
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bizon-dark-blue mb-6">
              Lo que dicen nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-blue to-bizon-accent">
                clientes
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-bizon-light-gray"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-bizon-gray mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-bizon-dark-blue">{testimonial.name}</p>
                  <p className="text-bizon-gray text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bizon-dark-blue to-bizon-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos hoy mismo para una consulta gratuita y descubre 
              cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-bizon-accent hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Solicitar Consulta Gratuita
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bizon-dark-blue font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Ver Casos de Éxito
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
