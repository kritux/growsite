import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  FaFilter, 
  FaExternalLinkAlt, 
  FaEye, 
  FaHeart,
  FaInstagram,
  FaGlobe,
  FaMobile,
  FaPalette,
  FaSearch,
  FaRocket,
  FaTimes
} from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'todos', name: 'Todos', icon: <FaRocket /> },
    { id: 'redes-sociales', name: 'Redes Sociales', icon: <FaInstagram /> },
    { id: 'web-development', name: 'Desarrollo Web', icon: <FaGlobe /> },
    { id: 'branding', name: 'Branding', icon: <FaPalette /> },
    { id: 'mobile-apps', name: 'Apps Móviles', icon: <FaMobile /> }
  ];

  const projects = [
    // Redes Sociales
    {
      id: 1,
      title: "Gestión de Redes Sociales - Cliente Restaurante",
      category: "redes-sociales",
      client: "Cliente Confidencial",
      description: "Estrategia completa de redes sociales con contenido creativo, stories interactivos y campañas de engagement para restaurante local.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      results: ["+250% engagement", "+120% seguidores", "+180% ventas online"],
      tags: ["Instagram", "Facebook", "Contenido Culinario", "Stories"],
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Branding Digital - Startup Tech",
      category: "redes-sociales",
      client: "TechFlow Solutions",
      description: "Identidad visual completa y estrategia de redes sociales para startup de tecnología.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: ["+400% reconocimiento", "+250% leads", "Brand consistency"],
      tags: ["Branding", "LinkedIn", "Twitter", "Contenido Tech"],
      year: "2024"
    },
    {
      id: 3,
      title: "Campaña Facebook Ads - E-commerce",
      category: "redes-sociales",
      client: "Moda Express",
      description: "Campañas publicitarias de Facebook e Instagram para tienda de moda online.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      results: ["+500% conversiones", "ROAS 4.2x", "+180% ventas"],
      tags: ["Facebook Ads", "Instagram Ads", "E-commerce", "Retargeting"],
      year: "2024"
    },

    // Desarrollo Web
    {
      id: 4,
      title: "E-commerce Premium - Moda Sostenible",
      category: "web-development",
      client: "EcoFashion",
      description: "Plataforma de e-commerce completa con sistema de pagos, gestión de inventario y panel administrativo.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      results: ["+300% ventas online", "UX optimizada", "Mobile-first"],
      tags: ["React", "Node.js", "E-commerce", "Responsive"],
      year: "2024",
      featured: true
    },
    {
      id: 5,
      title: "Landing Page - SaaS Fintech",
      category: "web-development",
      client: "PayFlow",
      description: "Landing page de alta conversión para plataforma de pagos digitales.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      results: ["+25% conversión", "A/B testing", "SEO optimizado"],
      tags: ["Next.js", "Tailwind CSS", "SEO", "Performance"],
      year: "2024"
    },
    {
      id: 6,
      title: "Portal Corporativo - Empresa Industrial",
      category: "web-development",
      client: "Industrias del Norte",
      description: "Sitio web corporativo con múltiples secciones, blog y sistema de contacto.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      results: ["+150% tráfico", "Mejor posicionamiento", "Lead generation"],
      tags: ["WordPress", "PHP", "Blog", "SEO"],
      year: "2023"
    },

    // Branding
    {
      id: 7,
      title: "Identidad Visual - Cafetería Artesanal",
      category: "branding",
      client: "Café del Artista",
      description: "Logo, paleta de colores, tipografías y elementos visuales para cafetería boutique.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
      results: ["Brand recognition", "Consistencia visual", "Aplicaciones"],
      tags: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
      year: "2024"
    },
    {
      id: 8,
      title: "Rebranding - Consultora Legal",
      category: "branding",
      client: "Legal Partners",
      description: "Renovación completa de la identidad visual para firma de abogados.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      results: ["Modernización", "Profesionalismo", "Aplicaciones"],
      tags: ["Rebranding", "Corporate Identity", "Print Design", "Digital"],
      year: "2023"
    },

    // Apps Móviles
    {
      id: 9,
      title: "App de Fitness - Entrenamiento Personal",
      category: "mobile-apps",
      client: "FitLife Pro",
      description: "Aplicación móvil para seguimiento de entrenamientos y nutrición personalizada.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      results: ["4.8★ rating", "+50k descargas", "User engagement"],
      tags: ["React Native", "iOS", "Android", "Fitness"],
      year: "2024",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-bizon-light-blue/20">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bizon-dark-blue via-bizon-blue to-bizon-light-blue relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-bizon-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nuestro{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-accent to-bizon-blue">
                Portfolio
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Descubre cómo hemos transformado la presencia digital de nuestros clientes 
              con soluciones creativas e innovadoras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-bizon-blue text-white shadow-lg'
                    : 'bg-gray-100 text-bizon-dark-blue hover:bg-gray-200'
                }`}
              >
                {filter.icon}
                <span>{filter.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Project Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-bizon-accent to-bizon-blue text-bizon-white px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Destacado
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-bizon-dark-blue px-3 py-1 rounded-full text-xs font-medium">
                      {filters.find(f => f.id === project.category)?.name}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                        <button
                          onClick={() => openProjectModal(project)}
                          className="flex-1 bg-white text-bizon-dark-blue px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <FaEye className="w-4 h-4" />
                          <span>Ver Detalles</span>
                        </button>
                        <button className="bg-bizon-accent text-bizon-white p-2 rounded-lg hover:bg-bizon-blue transition-colors duration-200">
                          <FaHeart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-bizon-gray">{project.year}</span>
                      <span className="text-sm font-medium text-bizon-blue">{project.client}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-bizon-dark-blue mb-3 group-hover:text-bizon-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-bizon-gray text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="mb-4">
                      <div className="text-xs font-medium text-bizon-gray mb-2">Resultados:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((result, idx) => (
                          <span
                            key={idx}
                            className="bg-bizon-blue/10 text-bizon-blue text-xs px-2 py-1 rounded-full"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-bizon-gray text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bizon-dark-blue to-bizon-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Listo para Crear Algo Increíble Juntos?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nuestro equipo está listo para transformar tu visión en realidad. 
              Contáctanos y comencemos a crear tu próximo proyecto exitoso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-white text-bizon-dark-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicitar Consulta
              </a>
              <a
                href="/servicios"
                className="border-2 border-white text-white hover:bg-white hover:text-bizon-dark-blue px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-bizon-dark-blue p-2 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-bizon-gray">{selectedProject.year}</span>
                  <span className="text-sm font-medium text-bizon-blue">{selectedProject.client}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-bizon-dark-blue mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-bizon-gray leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-bizon-dark-blue mb-3">Resultados Obtenidos:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-bizon-blue/10 text-bizon-blue px-4 py-3 rounded-lg text-center font-medium"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-bizon-dark-blue mb-3">Tecnologías y Herramientas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-bizon-gray px-3 py-2 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <a
                    href="/contacto"
                    className="inline-flex items-center bg-gradient-to-r from-bizon-blue to-bizon-accent text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FaRocket className="mr-2" />
                    Solicitar Proyecto Similar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
