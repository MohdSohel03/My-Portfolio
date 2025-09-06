import { ExternalLink, Github } from 'lucide-react';

// ✅ Import local images
import ecommerceImg from '../assets/projects/ecommerceImg.jpg';
import resumeImg from '../assets/projects/resume-builder.jpg';
import aiCareerImg from '../assets/projects/ai-career.webp';
import fitnessImg from '../assets/projects/fitnessImg.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      category: 'Web Development',
      description: 'A modern e-commerce platform with a sleek user interface and seamless checkout experience.',
      image: ecommerceImg, // ✅ imported image
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Resume Builder Website',
      category: 'Web Development',
      description: 'Interactive dashboard for financial data visualization with advanced filtering capabilities.',
      image: resumeImg,
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'AI-Based Career Counselor',
      category: 'Web Development',
      description: 'AI-Based Career Counselor is a smart web app that uses artificial intelligence to provide personalized career guidance, skill-gap analysis, and learning recommendations.',
      image: aiCareerImg,
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Fitness Tracker',
      category: 'Web Development',
      description: 'Personal fitness tracking application with workout plans and progress visualization.',
      image: fitnessImg,
      technologies: ['TypeScript', 'React', 'Django', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container">
        <h2 className="section-title reveal">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card project-card overflow-hidden reveal hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-surface-raised text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline transition"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline transition"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/MohdSohel03"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hover-lift"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
