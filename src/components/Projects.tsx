
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [projectRef, projectVisible] = useScrollAnimation();
  const [footerRef, footerVisible] = useScrollAnimation();

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website to showcase projects, skills, and contact information. Built using modern frontend tools and frameworks, ensuring high performance and a clean, accessible UI.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Contact Integration",
        "Project Showcase",
        "Built with React and Tailwind CSS"
      ],
      tech: ["React", "Tailwind CSS", "JavaScript", "HTML5"],
      status: "Live",
      gradient: "from-blue-500 to-purple-600",
      link: "https://codewithriyas.netlify.app/"
    },
    {
      title: "Dynamic Weather Web Portal",
      description: "Built a dynamic and responsive weather web application that fetches real-time weather data based on user-inputted or geolocation-based queries. Designed with intuitive frontend tools and an intuitive UI for a seamless user experience.",
      features: [
        "Real-time Weather Data",
        "Geolocation Support",
        "Responsive Design",
        "Intuitive UI",
        "Location-based queries"
      ],
      tech: ["JavaScript", "REST API", "HTML5", "CSS3"],
      status: "Live",
      gradient: "from-green-500 to-blue-600",
      link: "https://weatherbyrk.netlify.app/"
    },
    {
      title: "Hospital Integrated Solution Web Portal",
      description: "Designed and developed a full-stack hospital management web portal to manage doctor profiles, appointments, specializations, and patient records. Connected the frontend and backend seamlessly using Supabase as a backend-as-a-service (BaaS) solution.",
      features: [
        "Doctor Profile Management",
        "Appointment Scheduling",
        "Patient Records",
        "Backend Integration",
        "Secure Data Management"
      ],
      tech: ["React", "Supabase", "JavaScript", "CSS"],
      status: "Completed",
      gradient: "from-purple-500 to-pink-600",
      link: "https://globalhospitall.netlify.app/"
    },
    {
      title: "Employee Management System",
      description: "Developed a full-featured web application to perform CRUD operations on employee records. Implemented secure authentication and role-based access for administrators to protect sensitive employee data.",
      features: [
        "CRUD Operations",
        "Secure Authentication",
        "Role-based Access",
        "Data Protection",
        "Responsive UI design"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express"],
      status: "Completed",
      gradient: "from-orange-500 to-red-600",
      link: "https://empmansysbyrk.netlify.app/"
    },
    {
      title: "Real Time Chat Application",
      description: "Designed and developed a real-time chat application that enables instant messaging between users. The platform allows users to create accounts, join chat rooms, or initiate private one-on-one conversations, with messages transmitted in real-time.",
      features: [
        "Real-time Messaging",
        "User Accounts",
        "Chat Rooms",
        "Private Conversations",
        "WebSocket Integration"
      ],
      tech: ["WebSocket", "Node.js", "React", "Express"],
      status: "Completed",
      gradient: "from-teal-500 to-green-600",
      link: "https://chatwithrks.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my journey in web development through practical applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              ref={projectRef}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-700 hover:transform hover:scale-105 group ${
                projectVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">📌</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-green-400 text-sm font-medium">{project.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={footerRef} className={`text-center mt-12 transition-all duration-700 ${footerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-400 text-lg">
            More projects coming soon as I continue my development journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
