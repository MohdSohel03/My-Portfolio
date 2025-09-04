import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-10 bg-surface border-t border-surface-raised">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary">
              Portfolio
            </a>
            <p className="text-text-secondary mt-2">
              Crafting beautiful digital experiences.
            </p>
          </div>
          
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-link bg-surface-raised hover:bg-primary transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link bg-surface-raised hover:bg-primary transition">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link bg-surface-raised hover:bg-primary transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-surface-raised mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Mohd Sohel Ansari. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm flex items-center">
            Made with <Heart size={14} className="text-error mx-1" /> by Mohd Sohel Ansari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;