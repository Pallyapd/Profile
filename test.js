// AOS Initialization
AOS.init({
  duration: 1000,
  once: true,
});

// Custom Cursor Implementation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
  if (!cursor || !cursorFollower) return;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursorFollower.style.left = `${e.clientX}px`;
  cursorFollower.style.top = `${e.clientY}px`;
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    if (navLinks && burger) {
      navLinks.classList.remove('nav-active');
      burger.classList.remove('toggle');
    }
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// GSAP Animations for Skills Progress Bars
if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.progress').forEach(progress => {
    gsap.fromTo(
      progress,
      { width: '0%' },
      {
        width: progress.getAttribute('data-percentage') + '%',
        scrollTrigger: {
          trigger: progress,
          start: 'top 80%',
        },
        duration: 2,
        ease: 'power2.out',
      }
    );
  });
}

// Typed.js animation for name
new Typed('#typed', {
  strings: [
    'Praful Patil',
    'Senior Embedded Firmware Engineer',
    'IoT & Wireless Developer',
    'Low-Power Systems Engineer'
  ],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});

// Particles.js Initialization
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#00FFFF' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00FFFF',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3
    }
  }
});

// Contact Form Submission Handling
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement real submission logic here (email service / backend)
    alert('Thank you for your message!');
    form.reset();
  });
}

// Parallax effect
window.addEventListener('scroll', () => {
  const parallax = document.querySelectorAll('.parallax');
  let scrollPosition = window.pageYOffset;

  parallax.forEach(element => {
    const speed = parseFloat(element.dataset.speed) || 0.1;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

// Tilt effect on project cards
VanillaTilt.init(document.querySelectorAll('.project-item'), {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5,
});

// Scroll to top button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (!scrollToTopButton) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

if (scrollToTopButton) {
  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
