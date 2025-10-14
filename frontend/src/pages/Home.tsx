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