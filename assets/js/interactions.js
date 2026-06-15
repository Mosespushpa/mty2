// Enhanced interactions & functionality
(function(){
  // Smooth scroll spy for navbar
  const sections = document.querySelectorAll('[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function updateActive() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
  }
  
  window.addEventListener('scroll', updateActive, {passive:true});
  
  // Add ripple effect to buttons
  document.querySelectorAll('button, .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Lazy load images with fade-in
  const imgs = document.querySelectorAll('img[src]');
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.animation = 'fadeIn 0.6s ease';
        observer.unobserve(img);
      }
    });
  }, {rootMargin: '50px'});
  
  imgs.forEach(img => imgObserver.observe(img));
  
  // Scroll progress bar
  const progress = document.createElement('div');
  progress.id = 'scroll-progress';
  progress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff00ff, #00ff88);
    z-index: 9999;
    transition: width 0.1s ease;
    width: 0%;
  `;
  document.body.appendChild(progress);
  
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = document.getElementById('scroll-progress');
    if (progress) progress.style.width = (window.scrollY / totalHeight) * 100 + '%';
  }, {passive:true});
  
  // Add glow effect on mouse move
  const glowBg = document.getElementById('bg-canvas');
  if (glowBg) {
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, {passive:true});
  }
  
  // Form validation feedback
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ff0000';
          input.style.boxShadow = '0 0 10px rgba(255,0,0,0.5)';
          valid = false;
        } else {
          input.style.borderColor = '#00ff88';
          input.style.boxShadow = '0 0 10px rgba(0,255,136,0.5)';
        }
      });
      if (!valid) e.preventDefault();
    });
  });
  
  // Card click animation
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = '';
      }, 10);
    });
  });
  
  // Menu toggle for mobile
  const toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', function() {
      this.style.transform = this.classList.contains('collapsed') ? 'rotate(0deg)' : 'rotate(90deg)';
    });
  }
  
  // Log to console
  console.log('%c🎨 Website Enhanced!', 'color: #00ff88; font-size: 16px; font-weight: bold;');
  console.log('%cAnimated background: Purple ↔ Green gradient', 'color: #ff00ff; font-size: 12px;');
  console.log('%cAll interactions active!', 'color: #00ff88; font-size: 12px;');
})();

// Ripple effect CSS
const style = document.createElement('style');
style.textContent = `
  button, .btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,255,255,0));
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .nav-link.active {
    color: #00ff88 !important;
    text-shadow: 0 0 10px rgba(0,255,136,0.8);
  }
`;
document.head.appendChild(style);

// Gallery slider functionality
let currentSlide = 1;
function changeSlide(n) {
  showSlides(currentSlide += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) currentSlide = 1;
  if (n < 1) currentSlide = slides.length;
  
  slides.forEach(slide => slide.classList.remove('fade'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[currentSlide - 1]) {
    slides[currentSlide - 1].classList.add('fade');
  }
  if (dots[currentSlide - 1]) {
    dots[currentSlide - 1].classList.add('active');
  }
}

// Auto-advance gallery every 5 seconds
setInterval(() => changeSlide(1), 5000);
showSlides(1);

// Sign-In / Register toggle
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const formType = this.getAttribute('data-form');
    
    // Update active button
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Toggle forms
    document.querySelectorAll('.signin-form').forEach(form => form.classList.remove('active'));
    document.getElementById(`${formType}-form`).classList.add('active');
  });
});

// Update clock in footer
function updateFooterClock() {
  const hr = document.getElementById('hour');
  const min = document.getElementById('min');
  const sec = document.getElementById('seconds');
  const ampm = document.getElementById('ampm');
  
  if (!hr || !min || !sec || !ampm) return;
  
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let period = 'AM';
  
  if (h >= 12) {
    period = 'PM';
    if (h > 12) h -= 12;
  }
  if (h === 0) h = 12;
  
  hr.innerText = (h < 10 ? '0' : '') + h;
  min.innerText = (m < 10 ? '0' : '') + m;
  sec.innerText = (s < 10 ? '0' : '') + s;
  ampm.innerText = period;
}

updateFooterClock();
setInterval(updateFooterClock, 1000);

