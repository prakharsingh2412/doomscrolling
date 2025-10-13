import { Globe3D } from '../components/Globe3D';
import  Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
const Home = () => {
  return (
    <div className="size-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <Navbar />
          
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
    
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-blue-400">Live Global Activity</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl text-white tracking-tight">
                  Doom Scrollers
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Around the World
                  </span>
                </h1>
                
                <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0">
                  Watch in real-time as millions scroll endlessly across the globe. 
                  Color zones indicate activity levels - red (high), orange (medium), green (low). Drag to explore.
                </p>
    
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Explore Data
                  </button>
                  <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
    
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <div className="text-3xl text-white">2.4M</div>
                    <div className="text-sm text-slate-500">Active Now</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white">156</div>
                    <div className="text-sm text-slate-500">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white">24/7</div>
                    <div className="text-sm text-slate-500">Never Stops</div>
                  </div>
                </div>
              </div>
    
              {/* Right side - 3D Globe */}
              <div className="h-[600px] lg:h-[700px]">
                <Globe3D />
              </div>
            </div>
    
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-slate-500">Drag to rotate</span>
              <svg 
                className="w-6 h-6 text-slate-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </div>
          </section>
        <HowItWorks />
      </div>
  )
}

export default Home