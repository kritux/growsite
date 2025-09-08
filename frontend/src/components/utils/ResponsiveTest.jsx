import { useState, useEffect } from 'react';
import { FaMobile, FaTablet, FaDesktop, FaEye, FaEyeSlash } from 'react-icons/fa';

const ResponsiveTest = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDeviceType = () => {
    if (windowSize.width < 640) return 'mobile';
    if (windowSize.width < 1024) return 'tablet';
    return 'desktop';
  };

  const getBreakpoint = () => {
    if (windowSize.width < 640) return 'sm (Mobile)';
    if (windowSize.width < 768) return 'md (Tablet Portrait)';
    if (windowSize.width < 1024) return 'lg (Tablet Landscape)';
    if (windowSize.width < 1280) return 'xl (Desktop)';
    return '2xl (Large Desktop)';
  };

  const deviceType = getDeviceType();
  const breakpoint = getBreakpoint();

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-20 right-4 z-50 bg-bizon-blue text-white p-2 rounded-lg shadow-lg hover:bg-bizon-dark-blue transition-colors duration-300"
        title="Mostrar información responsive"
      >
        <FaEye className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-50 bg-white border border-bizon-light-gray rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-bizon-dark-blue">Responsive Test</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-bizon-gray hover:text-bizon-dark-blue transition-colors duration-300"
        >
          <FaEyeSlash className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center space-x-2">
          {deviceType === 'mobile' && <FaMobile className="w-3 h-3 text-bizon-blue" />}
          {deviceType === 'tablet' && <FaTablet className="w-3 h-3 text-bizon-blue" />}
          {deviceType === 'desktop' && <FaDesktop className="w-3 h-3 text-bizon-blue" />}
          <span className="font-medium text-bizon-dark-blue capitalize">{deviceType}</span>
        </div>
        
        <div className="text-bizon-gray">
          <div>Breakpoint: {breakpoint}</div>
          <div>Width: {windowSize.width}px</div>
          <div>Height: {windowSize.height}px</div>
        </div>

        <div className="pt-2 border-t border-bizon-light-gray">
          <div className="text-bizon-gray">
            <div className="font-medium text-bizon-dark-blue mb-1">Tailwind Classes:</div>
            <div className="space-y-1">
              <div>• sm: {windowSize.width >= 640 ? '✅' : '❌'} (640px+)</div>
              <div>• md: {windowSize.width >= 768 ? '✅' : '❌'} (768px+)</div>
              <div>• lg: {windowSize.width >= 1024 ? '✅' : '❌'} (1024px+)</div>
              <div>• xl: {windowSize.width >= 1280 ? '✅' : '❌'} (1280px+)</div>
              <div>• 2xl: {windowSize.width >= 1536 ? '✅' : '❌'} (1536px+)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTest;
