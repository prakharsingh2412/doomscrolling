import  Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import AboutSection from '../components/About';
import HeroSection from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="size-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <Navbar />
      <div className="h-20"></div>
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <Footer />
      </div>
  )
}

export default Home