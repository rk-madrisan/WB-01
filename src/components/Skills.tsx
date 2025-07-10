
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [headerRef, headerVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [languagesRef, languagesVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Shell Scripting", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Shadcn-UI", logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
        { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Supabase", logo: "https://supabase.com/favicon.ico" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Netlify", logo: "https://www.netlify.com/favicon.ico" },
        { name: "Visual Studio Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Other Skills",
      skills: [
        { name: "REST API Development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Responsive Web Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent", percentage: 100 },
    { name: "Tamil", level: "Native/Bilingual", percentage: 100 },
    { name: "Malayalam", level: "Proficient", percentage: 85 },
    { name: "Arabic", level: "Proficient", percentage: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about coding clean, scalable, and user-friendly applications
          </p>
        </div>

        <div ref={skillsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 ${skillsVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredSkill(category.title)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ animationDelay: skillsVisible ? `${index * 0.1}s` : '0s' }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">{category.title[0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm transition-all duration-300 ${
                      hoveredSkill === category.title ? 'bg-gray-700 text-white' : ''
                    }`}
                    style={{ 
                      animationDelay: `${skillIndex * 100}ms`,
                      animation: hoveredSkill === category.title ? 'fade-in 0.3s ease-out forwards' : ''
                    }}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={languagesRef} className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-700 ${languagesVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Languages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-gray-400 text-sm">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out ${
                      languagesVisible ? 'animate-scale-in' : 'w-0'
                    }`}
                    style={{ 
                      width: languagesVisible ? `${lang.percentage}%` : '0%',
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
