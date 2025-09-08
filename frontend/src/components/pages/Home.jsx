import Header from '../layout/Header';
import HeroSection from '../home/HeroSection';
import ServicesSection from '../home/ServicesSection';
import ContactSection from '../home/ContactSection';
import Footer from '../layout/Footer';
import ResponsiveTest from '../utils/ResponsiveTest';

const Home = () => {
  return (
    <div className="min-h-screen bg-bizon-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ResponsiveTest />
    </div>
  );
};

export default Home;
