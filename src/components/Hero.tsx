import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-60 h-60 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-left">
            <h1 className="mb-6">
              <span className="text-text-secondary">Hello, I'm</span>
              <br />
              <span className="text-primary">Mohd Sohel Ansari</span>
            </h1>
            <h2 className="mb-6 text-3xl md:text-4xl font-medium">Creative Developer</h2>
            <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-xl">
              I design and develop exceptional digital experiences that are
              simple, beautiful, and user-friendly. I specialize in creating
              stunning, high-performance websites and applications.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" className="btn btn-primary hover-lift">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-outline hover-lift">
                View My Work
              </a>
            </div>
            
            <div className="flex space-x-4">
               <a href="https://github.com/MohdSohel03" target="_blank" rel="noopener noreferrer" className="social-icon-link bg-surface-raised hover:bg-primary transition">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohd-sohel-ansari-a10993299/" target="_blank" rel="noopener noreferrer" className="social-icon-link bg-surface-raised hover:bg-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link bg-surface-raised hover:bg-primary transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slide-right">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-40 blur-lg"></div>
              <div className="relative h-full rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/035/490/094/small_2x/ai-generated-3d-cute-cartoon-call-center-character-png.png"
                  alt="Sohel's image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-surface-raised p-3 rounded-full animate-bounce hover:bg-primary transition-colors duration-300"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;