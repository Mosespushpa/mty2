let slideIndex = 0;
let slideInterval;
let isTransitioning = false;

// Initialize slider after DOM loads
document.addEventListener("DOMContentLoaded", function() {
  const slidesToShow = getVisibleSlides();
  initSlider(slidesToShow);
  updateCounter();
  startAutoSlide();
  setupHoverPause();
  window.addEventListener('resize', handleResize);
});

// Get number of visible slides based on screen size
function getVisibleSlides() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 1200) return 3;
  return 4;
}

// Handle window resize
function handleResize() {
  location.reload();
}

// Initialize slider with clones for infinite loop
function initSlider(slidesToShow) {
  const track = document.querySelector('.slider-track');
  const cards = Array.from(document.querySelectorAll('.slide-card'));
  
  // Clone all slides for infinite loop effect
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
  
  updateSlider(false);
}

// Update slider position
function updateSlider(animate = true) {
  const track = document.querySelector('.slider-track');
  const allCards = track.querySelectorAll('.slide-card');
  const cardWidth = allCards[0].offsetWidth;
  const gap = 25;
  const offset = -(slideIndex * (cardWidth + gap));
  
  if (!animate) {
    track.style.transition = 'none';
  } else {
    track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  }
  
  track.style.transform = `translateX(${offset}px)`;
  
  // Force reflow
  if (!animate) {
    track.offsetHeight;
  }
}

// Update slide counter
function updateCounter() {
  const originalSlides = 6;
  const displayIndex = (slideIndex % originalSlides) + 1;
  document.getElementById('current-slide').textContent = displayIndex;
  document.getElementById('total-slides').textContent = originalSlides;
}

// Navigation controls
function changeSlide(direction) {
  if (isTransitioning) return;
  
  isTransitioning = true;
  const track = document.querySelector('.slider-track');
  const originalSlides = 6;
  
  slideIndex += direction;
  
  updateSlider(true);
  updateCounter();
  
  // Handle infinite loop reset
  if (slideIndex >= originalSlides) {
    setTimeout(() => {
      slideIndex = 0;
      updateSlider(false);
    }, 600);
  } else if (slideIndex < 0) {
    slideIndex = originalSlides - 1;
    track.style.transition = 'none';
    updateSlider(false);
    setTimeout(() => {
      track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    }, 20);
  }
  
  setTimeout(() => {
    isTransitioning = false;
  }, 650);
  
  resetAutoSlide();
}

// Auto-slide functionality
function startAutoSlide() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 3000);
}

// Reset auto-slide timer
function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Pause on hover
function setupHoverPause() {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  
  sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  sliderWrapper.addEventListener('mouseleave', () => {
    startAutoSlide();
  });
}
