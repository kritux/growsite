import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaArrowRight, FaPlay } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil para optimizar performance
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          >
            <source 
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" 
              type="video/mp4" 
            />
            <div 
              className="w-full h-full bg-gradient-to-br from-bizon-dark-blue via-bizon-blue to-bizon-light-blue"
            ></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-bizon-dark-blue/60 via-bizon-blue/40 to-bizon-light-blue/30"></div>
        </div>
      )}

      {/* Background estático para móviles */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-bizon-light-gray via-white to-bizon-light-blue">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-bizon-blue opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-bizon-accent opacity-10 rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/30"
            >
              <FaRocket className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Transformamos tu presencia digital</span>
              <span className="sm:hidden">Presencia digital</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight drop-shadow-lg"
            >
              Impulsa tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bizon-accent to-bizon-blue">
                crecimiento
              </span>{' '}
              con Growth Bizon
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed drop-shadow-md px-2 sm:px-0"
            >
              Somos tu socio estratégico en marketing digital. Desde redes sociales 
              hasta estrategias de crecimiento, te ayudamos a alcanzar tus objetivos 
              de negocio con soluciones personalizadas y resultados medibles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/servicios"
                className="bg-white text-bizon-dark-blue hover:bg-bizon-light-gray text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Servicios
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contacto"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bizon-dark-blue text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300"
              >
                <FaPlay className="mr-2" />
                Consulta Gratuita
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-8 mt-6 sm:mt-8 lg:mt-12"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">50+</div>
                <div className="text-white/80 text-xs sm:text-sm">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">200%</div>
                <div className="text-white/80 text-xs sm:text-sm">Crecimiento Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-xs sm:text-sm">Soporte Disponible</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 mb-6 lg:mb-0"
          >
            {/* Main Visual */}
            <div className="relative">
              {/* Card 1 - Hidden on mobile, visible on larger screens */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="hidden md:block absolute top-0 left-0 w-48 lg:w-64 h-32 lg:h-40 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 lg:p-6 transform -rotate-6 border border-white/20"
              >
                <div className="flex items-center mb-2 lg:mb-3">
                  <div className="w-2 lg:w-3 h-2 lg:h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs lg:text-sm font-medium text-bizon-dark-blue">Crecimiento en Redes</span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-bizon-blue">+150%</div>
                <div className="text-xs text-bizon-gray">Engagement rate</div>
              </motion.div>

              {/* Card 2 - Hidden on mobile, visible on larger screens */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 5 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden md:block absolute top-16 lg:top-20 right-0 w-48 lg:w-64 h-32 lg:h-40 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 lg:p-6 transform rotate-6 border border-white/20"
              >
                <div className="flex items-center mb-2 lg:mb-3">
                  <div className="w-2 lg:w-3 h-2 lg:h-3 bg-bizon-accent rounded-full mr-2"></div>
                  <span className="text-xs lg:text-sm font-medium text-bizon-dark-blue">Conversiones</span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-bizon-accent">+300%</div>
                <div className="text-xs text-bizon-gray">Lead generation</div>
              </motion.div>

              {/* Main Image/Illustration - Responsive */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-bizon-dark-blue text-center shadow-2xl border border-white/20 mx-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
              >
                {/* Placeholder para imagen/ilustración */}
                <div className="w-full h-32 sm:h-40 lg:h-48 xl:h-64 bg-gradient-to-br from-bizon-blue to-bizon-light-blue rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                  <FaRocket className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2">Estrategia Digital</h3>
                <p className="text-xs sm:text-sm lg:text-base text-bizon-gray leading-relaxed">
                  Soluciones personalizadas para tu negocio
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
