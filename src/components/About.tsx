import { useEffect, useRef } from 'react';
import { Rows as Browser, Medal, Code, Lightbulb, UserCheck } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Browser size={40} className="text-primary" />,
      title: 'Web Design',
      description: 'Creative and responsive designs focused on user experience.',
    },
    {
      icon: <Code size={40} className="text-primary" />,
      title: 'Development',
      description: 'Clean, efficient code with modern technologies.',
    },
    {
      icon: <Lightbulb size={40} className="text-primary" />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces with beautiful aesthetics.',
    },
    {
      icon: <UserCheck size={40} className="text-primary" />,
      title: 'Consultation',
      description: 'Expert advice to optimize your digital presence.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-surface">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary"></div>
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About John Doe"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div className="reveal delay-200">
            <h3 className="text-2xl font-bold mb-4">Creative Developer with a passion for design</h3>
            <p className="text-text-secondary mb-6">
              I'm a front-end developer and UI/UX designer with over 2 years of experience 
              crafting beautiful and functional digital experiences. I combine technical
              expertise with a keen eye for design to create websites and applications
              that not only look great but also perform flawlessly.
            </p>
            <p className="text-text-secondary mb-6">
              I'm passionate about staying up-to-date with the latest technologies and design
              trends to deliver cutting-edge solutions. My approach focuses on creating 
              user-centered designs that help businesses achieve their goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-bold mb-3 flex items-center">
                  <Medal size={20} className="mr-2 text-primary" /> Experience
                </h4>
                <p className="text-text-secondary">2+ years</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center">
                  <Code size={20} className="mr-2 text-primary" /> Projects
                </h4>
                <p className="text-text-secondary">20+ completed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-12 text-center reveal">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card p-6 text-center hover-lift hover-glow reveal"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;