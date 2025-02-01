// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create particles
function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particlesContainer.appendChild(particle);

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    gsap.set(particle, {
      x: startX,
      y: startY,
      opacity: 0
    });

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
  // Hero section animation
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

  // About section animation
  gsap.from(".about-content", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      toggleActions: "play none none reverse"
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      toggleActions: "play none none reverse"
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Stats counter animation
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const value = stat.innerText;
    stat.innerText = '0';
    
    gsap.to(stat, {
      scrollTrigger: {
        trigger: stat,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      innerText: value,
      duration: 2,
      snap: { innerText: 1 }
    });
  });

  // Team cards animation
  const cards = document.querySelectorAll('.team-card');
  cards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power3.out"
    });
  });

  // Enhanced 3D effect for service cards
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    // Initial animation
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power3.out"
    });

    // Mouse move 3D effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.classList.add('moving');
      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        translateZ(20px)
      `;
    });

    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
      card.classList.remove('moving');
      card.style.transform = 'perspective(1000px)';
    });
  });

  // Services background parallax effect
  gsap.to(".services", {
    scrollTrigger: {
      trigger: ".services",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    backgroundPosition: "50% 100%",
    ease: "none"
  });
}

// Generate team members
function generateTeamMembers() {
  const teamGrid = document.querySelector('.team-grid');
  const roles = [
    { name: 'John Smith', role: 'CEO', bio: '15+ years of experience in IT leadership and strategic planning. Led multiple Fortune 500 digital transformations.' },
    { name: 'Sarah Johnson', role: 'Production Manager', bio: 'Former Google engineer with expertise in AI and cloud architecture. Patents holder in distributed systems.' },
    { name: 'Michael Chen', role: 'Solutions Architect', bio: 'Specialized in enterprise architecture and cloud migration. AWS certified professional.' },
    { name: 'Emma Davis', role: 'Security Expert', bio: 'CISSP certified with focus on cybersecurity and compliance. Former NSA consultant.' },
    { name: 'Alex Rodriguez', role: 'Lead Developer', bio: '10+ years in full-stack development. Created numerous successful enterprise applications.' },
    { name: 'Lisa Wang', role: 'Data Scientist', bio: 'PhD in Computer Science. Expert in machine learning and big data analytics.' },
    { name: 'David Kim', role: 'UX Director', bio: 'Award-winning designer with focus on enterprise UX. Former Apple design lead.' },
    { name: 'Rachel Foster', role: 'Project Manager', bio: 'PMP certified with 8+ years managing large-scale IT implementations.' },
    { name: 'James Wilson', role: 'DevOps Engineer', bio: 'Kubernetes expert. Implemented CI/CD pipelines for Fortune 100 companies.' },
    { name: 'Maria Garcia', role: 'Business Analyst', bio: 'MBA with expertise in digital transformation and process optimization.' }
  ];

  const images = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3'
  ];

  teamGrid.innerHTML = roles.map((member, index) => `
    <div class="team-card">
      <div class="card-inner">
        <div class="card-front">
          <img src="${images[index]}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        </div>
        <div class="card-back">
          <h3>${member.name}</h3>
          <p>${member.bio}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  generateTeamMembers();
  initAnimations();
});

const testimonials = [
  {
    name: "Abdul Majid",
    role: "MERN Stack Developer",
    image: "media/t1.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!",
    socials: [
      { icon: "fa-brands fa-twitter", link: "#" },
      { icon: "fa-brands fa-facebook", link: "#" },
      { icon: "fa-brands fa-linkedin", link: "#" },
    ],
  },
  {
    name: "Raza abbas",
    role: "Frontend Developer",
    image: "media/t2.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!",
    socials: [
      { icon: "fa-brands fa-twitter", link: "#" },
      { icon: "fa-brands fa-facebook", link: "#" },
      { icon: "fa-brands fa-linkedin", link: "#" },
    ],
  },
  {
    name: "Hassan Ali",
    role: "UI/UX Designer",
    image: "media/t3.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!",
    socials: [
      { icon: "fa-brands fa-twitter", link: "#" },
      { icon: "fa-brands fa-facebook", link: "#" },
      { icon: "fa-brands fa-linkedin", link: "#" },
    ],
  },
];

function generateCarouselItems() {
  const carouselInner = document.querySelector(".carousel-inner");

  testimonials.forEach((testimonial, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) carouselItem.classList.add("active"); 

    const singleItem = `
      <div class="single-item">
        <div class="row">
          <div class="col-md-5">
            <div class="profile">
              <div class="img-area">
                <img src="${testimonial.image}" alt="${testimonial.name}">
              </div>
              <div class="bio">
                <h2>${testimonial.name}</h2>
                <h4>${testimonial.role}</h4>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content">
              <p><span><i class="fa fa-quote-left"></i></span>${testimonial.quote}</p>
              <p class="socials">
                ${testimonial.socials
                  .map(
                    (social) =>
                      `<a href="${social.link}" target="_blank"><i class="${social.icon}"></i></a>`
                  )
                  .join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    carouselItem.innerHTML = singleItem;

    carouselInner.appendChild(carouselItem);
  });
}

generateCarouselItems();
 

gsap.to('.footer .waves .wave1', {
  backgroundPositionX: "1000px", // Moves the background image
  duration: 4,
  repeat: -1,
  ease: "linear"
});

gsap.to('.footer .waves .wave2', {
  backgroundPositionX: "-1000px", // Moves the background image
  duration: 4,
  repeat: -1,
  ease: "linear"
});

gsap.to('.footer .waves .wave3', {
  backgroundPositionX: "-1000px", // Moves the background image
  duration: 3,
  repeat: -1,
  ease: "linear"
});
gsap.to('.footer .waves .wave4', {
  backgroundPositionX: "-1000px", // Moves the background image
  duration: 3,
  repeat: -1,
  ease: "linear"
});
