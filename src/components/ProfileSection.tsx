
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileSectionProps {
  mousePosition: { x: number; y: number };
}

const ProfileSection = ({ mousePosition }: ProfileSectionProps) => {
  return (
    <div className="animate-fade-in">
      {/* Profile Photo */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
          <img 
            src="https://i.postimg.cc/tgSwN9TR/pp-photo.jpg" 
            alt="Mohamed Riyaskhan M" 
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3"
          />
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-70 animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-purple-600/20 hover:bg-purple-500/30 border border-purple-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          onClick={() => window.open('https://github.com/rk-madrisan/rk-madrisan.git', '_blank')}
        >
          <Github className="h-5 w-5 text-purple-300" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-pink-600/20 hover:bg-pink-500/30 border border-pink-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          onClick={() => window.open('https://www.linkedin.com/in/mohamed-riyaskhan-837297369', '_blank')}
        >
          <Linkedin className="h-5 w-5 text-pink-300" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-blue-600/20 hover:bg-blue-500/30 border border-blue-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          onClick={() => window.location.href = 'mailto:mriyaskhan.official@gmail.com'}
        >
          <Mail className="h-5 w-5 text-blue-300" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
