import { motion } from 'framer-motion';
import Header from '../layout/Header';
import { 
  FaRocket, 
  FaUsers, 
  FaLightbulb, 
  FaChartLine, 
  FaAward,
  FaHeart,
  FaShieldAlt,
  FaHandshake,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: "Pasión",
      description: "Amamos lo que hacemos y eso se refleja en cada proyecto que entregamos."
    },
    {
      icon: FaShieldAlt,
      title: "Transparencia",
      description: "Mantenemos una comunicación clara y honesta en todo momento."
    },
    {
      icon: FaHandshake,
      title: "Compromiso",
      description: "Nos comprometemos con el éxito de nuestros clientes como si fuera nuestro propio negocio."
    },
    {
      icon: FaRocket,
      title: "Innovación",
      description: "Siempre buscamos las mejores estrategias y tecnologías para impulsar el crecimiento."
    }
  ];

  const team = [
    {
      name: "Cristian Camacho",
      role: "CEO & Fundador",
      image: "https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=CC",
      description: "Especialista en marketing digital con más de 5 años de experiencia."
    },
    {
      name: "María González",
      role: "Directora de Marketing",
      image: "https://via.placeholder.com/200x200/F59E0B/FFFFFF?text=MG",
      description: "Experta en estrategias de crecimiento y gestión de redes sociales."
    },
    {
      name: "Carlos Rodríguez",
      role: "Desarrollador Senior",
      image: "https://via.placeholder.com/200x200/10B981/FFFFFF?text=CR",
      description: "Desarrollador full-stack especializado en aplicaciones web modernas."
    },
    {
      name: "Ana Martínez",
      role: "Diseñadora UX/UI",
      image: "https://via.placeholder.com/200x200/8B5CF6/FFFFFF?text=AM",
      description: "Creadora de experiencias digitales únicas y memorables."
    }
  ];

  const stats = [
    { number: "50+", label: "Clientes Satisfechos" },
    { number: "200+", label: "Proyectos Completados" },
    { number: "5+", label: "Años de Experiencia" },
    { number: "24/7", label: "Soporte Disponible" }
  ];

  const achievements = [
    {
      icon: FaAward,
      title: "Mejor Agencia Digital 2024",
      description: "Reconocimiento por excelencia en servicios de marketing digital."
    },
    {
      icon: FaStar,
      title: "Certificación Google Partner",
      description: "Socio certificado de Google para publicidad digital."
    },
    {
      icon: FaCheckCircle,
      title: "100% Satisfacción del Cliente",
      description: "Mantenemos un índice de satisfacción del 100%."
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
              Sobre Nosotros
            </h1>
            <p className="text-lg sm:text-xl text-bizon-gray max-w-3xl mx-auto leading-relaxed">
              Somos una agencia de marketing digital apasionada por impulsar el crecimiento de nuestros clientes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-bizon-blue rounded-xl flex items-center justify-center mr-4">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-bizon-dark-blue">
                  Nuestra Misión
                </h2>
              </div>
              <p className="text-bizon-gray text-lg leading-relaxed mb-6">
                Transformar negocios a través de estrategias digitales innovadoras, 
                ayudando a nuestros clientes a alcanzar su máximo potencial en el mundo digital.
              </p>
              <p className="text-bizon-gray leading-relaxed">
                Creemos que cada empresa tiene una historia única que contar, 
                y nuestro trabajo es asegurarnos de que esa historia llegue a las personas correctas, 
                en el momento correcto, de la manera correcta.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-bizon-blue to-bizon-dark-blue rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 text-white"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Ser la agencia de marketing digital más confiable y efectiva, 
                reconocida por impulsar el crecimiento sostenible de nuestros clientes.
              </p>
              <p className="text-white/80 leading-relaxed">
                Aspiramos a ser líderes en innovación digital, 
                creando soluciones que no solo cumplan objetivos, 
                sino que superen las expectativas y generen resultados extraordinarios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-bizon-dark-blue mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-bizon-gray max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y relación con los clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bizon-light-gray rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-bizon-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-bizon-dark-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-bizon-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-bizon-blue to-bizon-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nuestros Números
            </h2>
            <p className="text-white/90 text-lg">
              Resultados que hablan por sí mismos
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-bizon-dark-blue mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-bizon-gray max-w-2xl mx-auto">
              Conoce a los expertos que harán realidad tu visión digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bizon-dark-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-bizon-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-bizon-gray text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-bizon-dark-blue mb-4">
              Logros y Reconocimientos
            </h2>
            <p className="text-lg text-bizon-gray max-w-2xl mx-auto">
              Premios y certificaciones que avalan nuestro trabajo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bizon-light-gray rounded-2xl p-6 sm:p-8 text-center"
              >
                <div className="w-16 h-16 bg-bizon-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-bizon-dark-blue mb-3">
                  {achievement.title}
                </h3>
                <p className="text-bizon-gray leading-relaxed">
                  {achievement.description}
                </p>
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
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Únete a más de 50 empresas que ya confían en Growth Bizon para impulsar su crecimiento digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-white text-bizon-dark-blue hover:bg-bizon-light-gray text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar Consulta Gratuita
              </a>
              <a
                href="/servicios"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bizon-dark-blue text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Ver Nuestros Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
