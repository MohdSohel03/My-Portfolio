import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    closeMobileMenu();
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface backdrop-blur-lg bg-opacity-95 shadow-lg py-3 border-b border-surface-raised'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative font-medium transition-all duration-300 hover:text-primary group ${
                    activeSection === item.href.substring(1) 
                      ? 'text-primary' 
                      : 'text-text hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === item.href.substring(1) 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mobile-menu-button text-text p-2 hover:bg-surface-raised rounded-lg transition-colors duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`} 
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background bg-opacity-95 backdrop-blur-lg z-30 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div className={`mobile-menu flex flex-col items-center justify-center h-full transition-all duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
        }`}>
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map((item, index) => (
              <li 
                key={item.name}
                className={`transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-2xl font-medium transition-all duration-300 hover:text-primary hover:scale-110 block py-2 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-primary' 
                      : 'text-text'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu decoration */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;