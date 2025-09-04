import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate skill bars when they come into view
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar) => {
              const percentage = bar.getAttribute('data-percentage');
              if (percentage) {
                (bar as HTMLElement).style.width = percentage;
              }
            });
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

  const technicalSkills = [
    { name: 'HTML & CSS', percentage: '95%' },
    { name: 'JavaScript', percentage: '85%' },
    { name: 'React', percentage: '80%' },
    { name: 'Django', percentage: '60%' },
    { name: 'Node.js', percentage: '60%' },
    { name: 'MongoDB', percentage: '75%' },
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: '90%' },
    { name: 'Communication', percentage: '85%' },
    { name: 'Teamwork', percentage: '90%' },
    { name: 'Creativity', percentage: '95%' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title reveal">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-text-secondary">{skill.percentage}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-percentage={skill.percentage}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal delay-200">
            <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-text-secondary">{skill.percentage}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-percentage={skill.percentage}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 reveal">
              <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-4">
                {['Git', 'VS Code', 'Canva', 'Webpack', 'Jest', 'Netlify'].map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-surface rounded-full text-sm font-medium hover-lift"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;