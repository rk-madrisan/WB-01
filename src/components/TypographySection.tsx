
interface TypographySectionProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const TypographySection = ({ mousePosition, scrollY }: TypographySectionProps) => {
  return (
    <>
      {/* Simple Typography */}
      <div className="mb-8">
        <div 
          className="text-xl md:text-2xl text-purple-300 mb-4"
          style={{
            transform: `translateX(${mousePosition.x * 0.02 - 1}px)`
          }}
        >
          Hi there, I'm
        </div>
        
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          style={{
            transform: `translateX(${mousePosition.x * -0.02 + 1}px)`
          }}
        >
          <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Mohamed Riyaskhan M
          </div>
        </h1>

        <div 
          className="text-2xl md:text-3xl text-pink-300 font-medium mb-6"
          style={{
            transform: `translateX(${mousePosition.x * 0.01}px)`
          }}
        >
          Full Stack Developer
        </div>
      </div>

      {/* Description */}
      <div 
        className="relative mb-12"
        style={{
          transform: `translateY(${scrollY * -0.05}px)`
        }}
      >
        <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Motivated and detail-oriented Full Stack Developer with strong foundational knowledge in modern web development
          technologies and frameworks including{" "}
          <span className="text-purple-300 font-medium">HTML, CSS, JavaScript, Node.js, React.js and MongoDB</span>.
          <br />
          Proficient in developing responsive web applications, RESTful APIs, and integrating front-end and back-end systems.{" "}
          <span className="text-pink-300 font-medium">Committed to continuous learning and staying updated with emerging web technologies</span>.
        </p>
      </div>
    </>
  );
};

export default TypographySection;
