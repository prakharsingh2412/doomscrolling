import Navbar from '../components/home/Navbar';
import HowItWorks from '../components/home/HowItWorks';
import AboutSection from '../components/home/About';
import HeroSection from '../components/home/Hero';
import Footer from '../components/home/Footer';
const Home = () => {
  return (
    <div className="size-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <Navbar />
      <div className="h-20"></div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <Footer />
    </div>
  )
}

export default Home