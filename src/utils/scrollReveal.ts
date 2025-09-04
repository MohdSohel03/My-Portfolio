export const initScrollReveal = () => {
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
};

export const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar) => {
    const percentage = bar.getAttribute('data-percentage');
    if (percentage) {
      (bar as HTMLElement).style.width = percentage;
    }
  });
};