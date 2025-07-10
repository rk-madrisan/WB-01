
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

const CTASection = ({ scrollY, scrollToSection }: CTASectionProps) => {
  return (
    <>
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <Button 
          onClick={() => scrollToSection('projects')}
          className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg rounded-full transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-purple-500/25 border-0 overflow-hidden"
        >
          <span className="relative z-10 flex items-center font-semibold">
            VIEW MY WORK
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          variant="outline" 
          className="group relative border-2 border-purple-400/50 text-purple-300 hover:bg-purple-400/10 hover:text-white hover:border-purple-300 px-10 py-6 text-lg rounded-full transition-all duration-500 hover:scale-110 hover:-translate-y-2 backdrop-blur-sm bg-white/5 font-semibold"
        >
          <span className="flex items-center">
            GET IN TOUCH
            <Mail className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </span>
        </Button>
      </div>

      {/* Status Indicator */}
      <div 
        className="flex items-center justify-center gap-3 text-sm text-gray-300"
        style={{
          transform: `translateY(${scrollY * -0.03}px)`
        }}
      >
        <div className="relative">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping absolute"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>
        <span className="font-medium">AVAILABLE FOR NEW OPPORTUNITIES</span>
      </div>
    </>
  );
};

export default CTASection;
