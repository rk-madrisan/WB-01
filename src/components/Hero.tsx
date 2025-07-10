
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import ProfileSection from "./ProfileSection";
import TypographySection from "./TypographySection";
import CTASection from "./CTASection";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02}%`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.01}%`,
            bottom: `${20 + mousePosition.y * 0.01}%`,
            transform: `translateY(${scrollY * -0.3}px)`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${60 + mousePosition.x * 0.015}%`,
            top: `${10 + mousePosition.y * 0.015}%`,
            transform: `translateY(${scrollY * 0.8}px)`,
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) translateY(${scrollY * 0.2}px)`
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div 
          className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        >
          <ProfileSection mousePosition={mousePosition} />
          <TypographySection mousePosition={mousePosition} scrollY={scrollY} />
          <CTASection scrollY={scrollY} scrollToSection={scrollToSection} />
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            transform: `translateX(-50%) translateY(${scrollY * -0.5}px)`
          }}
        >
          <button 
            onClick={() => scrollToSection('skills')}
            className="group flex flex-col items-center text-purple-400 hover:text-purple-300 transition-all duration-500"
          >
            <div className="animate-bounce group-hover:animate-none mb-2">
              <ArrowDown className="h-6 w-6" />
            </div>
            <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              SCROLL TO EXPLORE
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-purple-400 to-transparent mt-2 opacity-50"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
