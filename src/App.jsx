import Navbar from './components/navBar/Navbar';
import HeroSection from './components/heroSection/HeroSection';
import FeaturSection from './components/FeaturSection';
import PricingSection from './components/pricingsction/PricingSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <FeaturSection />
    <PricingSection />
    <TestimonialsSection />
    <CallToAction />
    <Footer />
    </>
  );
}

export default App;