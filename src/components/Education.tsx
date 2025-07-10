
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Education = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();
  const [accomplishmentsRef, accomplishmentsVisible] = useScrollAnimation();

  const educationData = [
    {
      degree: "MCA (Master of Computer Application)",
      institution: "MEASI Institute of Information Technology, Chennai",
      period: "2024 – Present",
      status: "Current",
      icon: "🎓",
      color: "from-purple-500 to-violet-500"
    },
    {
      degree: "B.Sc Physics",
      institution: "The New College, Chennai",
      period: "2021 – 2024",
      status: "Completed",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "AISSCE (Class 12 - CBSE)",
      institution: "Dharani International School, Tenkasi",
      period: "2017 – 2018",
      status: "Completed",
      icon: "📜",
      color: "from-green-500 to-emerald-500"
    },
    {
      degree: "AISSE (Class 10 - CBSE)",
      institution: "Sri Parasakthi Vidyalaya, Tenkasi",
      period: "2015 – 2016",
      status: "Completed",
      icon: "📜",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong academic foundation in technology and sciences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={timelineRef} className={`relative transition-all duration-700 ${timelineVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row transition-all duration-700 ${
                  timelineVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: timelineVisible ? `${index * 0.2}s` : '0s' }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-800 z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                }`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    } justify-start`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-700 text-gray-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {item.degree}
                    </h3>
                    <p className="text-purple-300 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accomplishments section */}
        <div ref={accomplishmentsRef} className={`mt-20 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-700 ${accomplishmentsVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Accomplishments & Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Member of EXNORA", description: "Environmental awareness and community service", icon: "🌱" },
              { title: "NSS Volunteer", description: "National Service Scheme participation", icon: "🤝" },
              { title: "BIS Awareness Programs", description: "Bureau of Indian Standards initiatives", icon: "📋" }
            ].map((accomplishment, index) => (
              <div 
                key={index} 
                className={`text-center p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-500 ${
                  accomplishmentsVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: accomplishmentsVisible ? `${index * 0.1}s` : '0s' }}
              >
                <div className="text-4xl mb-3">{accomplishment.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{accomplishment.title}</h4>
                <p className="text-gray-400 text-sm">{accomplishment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
