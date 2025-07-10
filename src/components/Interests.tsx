import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Interests = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const interests = [
    {
      title: "Web Technologies",
      description: "Exploring emerging web technologies and full-stack development trends",
      icon: "💻"
    },
    {
      title: "Travel",
      description: "Traveling to new destinations and exploring diverse cultures",
      icon: "✈️"
    },
    {
      title: "Music & Podcasts",
      description: "Listening to music, tech podcasts, and industry talks",
      icon: "🎵"
    },
    {
      title: "Culinary Arts",
      description: "Culinary arts and experimenting with regional cuisines",
      icon: "🍳"
    },
    {
      title: "Cinema",
      description: "Watching films, documentaries, and inspirational cinema",
      icon: "🎬"
    }
  ];

  return (
    <section id="interests" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interests
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beyond coding, I explore various passions that inspire creativity and growth
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 border border-white/20"
            >
              <div className="text-4xl mb-4">{interest.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{interest.title}</h3>
              <p className="text-gray-300">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;