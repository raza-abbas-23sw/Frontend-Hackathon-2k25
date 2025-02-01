function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particlesContainer.appendChild(particle);
  
      // Random size between 2 and 6 pixels
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
  
      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      gsap.set(particle, {
        x: startX,
        y: startY,
        opacity: 0
      });
  
      // Animate each particle
      animateParticle(particle);
    }
  }
  
  function animateParticle(particle) {
    const duration = Math.random() * 3 + 2;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;
  
    gsap.to(particle, {
      x: endX,
      y: endY,
      opacity: Math.random() * 0.5 + 0.1,
      duration: duration,
      ease: "none",
      onComplete: () => {
        gsap.set(particle, {
          x: startX,
          y: startY
        });
        animateParticle(particle);
      }
    });
  }
  
  // Initial animations
  function initAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const button = document.querySelector('.cta-button');
  
    const tl = gsap.timeline();
  
    tl.to(heroContent, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(title, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(subtitle, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(button, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initAnimations();
  });

//footer waves
gsap.to('.footer .waves .wave1', {
    backgroundPositionX: "1000px", 
    duration: 4,
    repeat: -1,
    ease: "linear",
    x:200
});
gsap.to('.footer .waves .wave2',{
    backgroundPositionX: "-1000px", 
    duration: 4,
    repeat: -1,
    ease: "linear" 
})
gsap.to('.footer .waves .wave3',{
    backgroundPositionX: "-1000px", 
    duration: 4,
    repeat: -1,
    ease: "linear"
})
gsap.to('.footer .waves .wave4',{
    backgroundPositionX: "-1000px", 
    duration: 4,
    repeat: -1,
    ease: "linear" 
})
  
