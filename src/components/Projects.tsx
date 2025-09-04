import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      category: 'Web Development',
      description: 'A modern e-commerce platform with a sleek user interface and seamless checkout experience.',
      image: 'https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2F323ba313-0450-4571-a855-f16b94dcb48f?csig=AAAAAAAAAAAAAAAAAAAAABYZNA-YYqqGiRsb15pwByLaY3RmjC98YIWBH_yL-ERk&exp=1756930802&signer=media-rpc&token=AAIAAU0AJDMyM2JhMzEzLTA0NTAtNDU3MS1hODU1LWYxNmI5NGRjYjQ4ZgAAAAABmRE8gVC6pBgKd6L1-D2NI7FUXHPHCYs9-8A4d89lcR-jU8cq2Q',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Resume Builder Website',
      category: 'Web Development',
      description: 'Interactive dashboard for financial data visualization with advanced filtering capabilities.',
      image: 'https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2Fe4846a42-f021-43b6-bf03-7e92060312e8?csig=AAAAAAAAAAAAAAAAAAAAAMGjg1xYxXfVOuE8ZZBmcBph-tcLwz-gM1EQ9X1sCw0M&exp=1756934226&signer=media-rpc&token=AAIAAU0AJGU0ODQ2YTQyLWYwMjEtNDNiNi1iZjAzLTdlOTIwNjAzMTJlOAAAAAABmRFwwFDfeYUKlFJzXEVwl72unaBX8x4RradrRZsSHfBF4bsqzA',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'AI-Based Career Counselor',
      category: 'Web Development',
      description: 'AI-Based Career Counselor is a smart web app that uses artificial intelligence to provide personalized career guidance, skill-gap analysis, and learning recommendations.',
      image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Fitness Tracker',
      category: 'Web Development',
      description: 'Personal fitness tracking application with workout plans and progress visualization.',
      image: 'https://media.canva.com/v2/files/uri:ifs%3A%2F%2FS%2F3a3e101e-c836-4872-ad10-94b367bb970b_00000098_000?csig=AAAAAAAAAAAAAAAAAAAAALDO1R2CW_KFB-Ll_fsewFMzuAF1fFzr1BDrG1DDFoBN&exp=1756922751&signer=assistant-rpc&token=AAIAAVMAMTNhM2UxMDFlLWM4MzYtNDg3Mi1hZDEwLTk0YjM2N2JiOTcwYl8wMDAwMDA5OF8wMDAAAAAAAZkQwaqG9NrggqUZ22GhFxn8T8jsVGuvsGHC8lFnsD-zvrsqzfM',
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