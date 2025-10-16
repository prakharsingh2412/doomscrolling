import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Real-world geographic zones with coordinates and activity levels
const ACTIVITY_ZONES = [
  // North America
  { lat: 40, lon: -100, intensity: 0.9, country: 'USA' },
  { lat: 45, lon: -75, intensity: 0.7, country: 'Canada' },
  { lat: 19, lon: -99, intensity: 0.6, country: 'Mexico' },
  
  // Europe
  { lat: 51, lon: -0.1, intensity: 0.85, country: 'UK' },
  { lat: 48, lon: 2.3, intensity: 0.8, country: 'France' },
  { lat: 52, lon: 13.4, intensity: 0.75, country: 'Germany' },
  { lat: 41, lon: 12.5, intensity: 0.65, country: 'Italy' },
  { lat: 40, lon: -3.7, intensity: 0.7, country: 'Spain' },
  
  // Asia
  { lat: 35, lon: 139, intensity: 0.95, country: 'Japan' },
  { lat: 37, lon: 127, intensity: 0.9, country: 'South Korea' },
  { lat: 31, lon: 121, intensity: 0.88, country: 'China' },
  { lat: 28, lon: 77, intensity: 0.92, country: 'India' },
  { lat: 1.3, lon: 103, intensity: 0.8, country: 'Singapore' },
  
  // South America
  { lat: -23, lon: -46, intensity: 0.75, country: 'Brazil' },
  { lat: -34, lon: -58, intensity: 0.65, country: 'Argentina' },
  
  // Africa
  { lat: -26, lon: 28, intensity: 0.6, country: 'South Africa' },
  { lat: 30, lon: 31, intensity: 0.7, country: 'Egypt' },
  
  // Oceania
  { lat: -33, lon: 151, intensity: 0.75, country: 'Australia' },
  { lat: -41, lon: 174, intensity: 0.6, country: 'New Zealand' },
];

// Convert lat/lon to 3D position on sphere
const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

// Generate scrollers around a zone
const generateZoneScrollers = (zone: typeof ACTIVITY_ZONES[0], count: number) => {
  const scrollers = [];
  for (let i = 0; i < count; i++) {
    // Add random offset around the zone center
    const latOffset = (Math.random() - 0.5) * 20;
    const lonOffset = (Math.random() - 0.5) * 20;
    const position = latLonToVector3(zone.lat + latOffset, zone.lon + lonOffset, 2.05);
    
    scrollers.push({
      position,
      lifetime: Math.random() * 3 + 1, // 1-4 seconds
      startTime: Math.random() * 2,
    });
  }
  return scrollers;
};

function ActivityZone({ zone, time }: { zone: typeof ACTIVITY_ZONES[0]; time: number }) {
  const position = latLonToVector3(zone.lat, zone.lon, 2.02);
  
  // Pulsing intensity
  const pulseIntensity = 0.5 + Math.sin(time * 2) * 0.2;
  
  // Color based on intensity (green = low, yellow = medium, red = high)
  const color = zone.intensity > 0.8 
    ? '#ef4444' // red
    : zone.intensity > 0.6 
    ? '#f59e0b' // orange
    : '#10b981'; // green
  
  return (
    <group>
      {/* Zone marker */}
      <mesh position={position}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      
      {/* Pulsing glow */}
      <mesh position={position}>
        <sphereGeometry args={[0.15 * zone.intensity, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3 * pulseIntensity}
        />
      </mesh>
      
      {/* Large area glow */}
      <mesh position={position}>
        <sphereGeometry args={[0.3 * zone.intensity, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1 * zone.intensity}
        />
      </mesh>
    </group>
  );
}

function DoomScroller({ 
  position, 
  startTime, 
  lifetime, 
  currentTime 
}: { 
  position: THREE.Vector3; 
  startTime: number; 
  lifetime: number; 
  currentTime: number;
}) {
  const age = currentTime - startTime;
  
  // Fade in and out
  let opacity = 0;
  if (age < 0) return null;
  if (age < 0.3) {
    opacity = age / 0.3;
  } else if (age > lifetime - 0.5) {
    opacity = (lifetime - age) / 0.5;
  } else {
    opacity = 1;
  }
  
  if (opacity <= 0) return null;
  
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

function RotatingGlobe() {
  const globeRef = useRef<THREE.Group>(null);
  const [time, setTime] = useState(0);
  
  // Load Earth texture
  const earthTexture = useLoader(
    THREE.TextureLoader,
    'https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg'
  );
  
  // Generate scrollers for each zone
  const allScrollers = useMemo(() => {
    const scrollers: any[] = [];
    ACTIVITY_ZONES.forEach(zone => {
      const count = Math.floor(zone.intensity * 30); // More scrollers in high activity zones
      scrollers.push(...generateZoneScrollers(zone, count));
    });
    return scrollers;
  }, []);
  
  // Regenerate scrollers periodically
  const [currentScrollers, setCurrentScrollers] = useState(allScrollers);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const scrollers: any[] = [];
      ACTIVITY_ZONES.forEach(zone => {
        const count = Math.floor(zone.intensity * 30);
        scrollers.push(...generateZoneScrollers(zone, count));
      });
      setCurrentScrollers(scrollers);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Auto-rotate and update time
  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
    setTime(prev => prev + delta);
  });
  
  return (
    <group ref={globeRef}>
      {/* Main Globe with Earth texture map */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.7}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Grid overlay */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>
      
      {/* Activity zones */}
      {ACTIVITY_ZONES.map((zone, index) => (
        <ActivityZone key={index} zone={zone} time={time} />
      ))}
      
      {/* Real-time doom scrollers */}
      {currentScrollers.map((scroller, index) => (
        <DoomScroller
          key={index}
          position={scroller.position}
          startTime={scroller.startTime}
          lifetime={scroller.lifetime}
          currentTime={time}
        />
      ))}
      
      {/* Atmosphere glow */}
      <Sphere args={[2.3, 64, 64]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// Real-time stats component
function LiveStats() {
  const [activeUsers, setActiveUsers] = useState(2430000);
  const [countries, setCountries] = useState(156);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 10000) - 5000;
        return Math.max(2000000, Math.min(3000000, prev + change));
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[250px]">
      <div className="space-y-3">
        <div>
          <div className="text-xs text-slate-400 mb-1">Active Scrollers</div>
          <div className="text-2xl text-white tabular-nums">
            {activeUsers.toLocaleString()}
          </div>
        </div>
        
        <div className="h-px bg-white/10" />
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-slate-400">Countries</div>
            <div className="text-lg text-white">{countries}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Status</div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-green-400">Live</span>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-white/10" />
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded" />
              <span className="text-slate-400">High Activity</span>
            </div>
            <span className="text-white">80-100%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded" />
              <span className="text-slate-400">Medium</span>
            </div>
            <span className="text-white">60-80%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded" />
              <span className="text-slate-400">Low Activity</span>
            </div>
            <span className="text-white">0-60%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Globe3D() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        className="cursor-grab active:cursor-grabbing"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#3b82f6" />
        <pointLight position={[5, 0, 5]} intensity={0.4} color="#60a5fa" />
        
        {/* Globe */}
        <RotatingGlobe />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={4}
          maxDistance={10}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Live stats overlay */}
      <LiveStats />
    </div>
  );
}
