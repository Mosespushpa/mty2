let slideIndex = 1;
let slideInterval;

// Initialize the slider loop safely after DOM finishes compiling
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  startAutoSlide();
});

// Next/previous controls
function changeSlide(n) {
  resetAutoSlide();
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  resetAutoSlide();
  showSlides(slideIndex = n);
}

// Core function to manage visibility and classes safely
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  
  // Hide all slides and reset animations safely
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides[i].classList.remove("fade");
  }
  
  // Remove active state from indicators safely using classList
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  // Display target view and inject transition class dynamically
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";  
    slides[slideIndex - 1].classList.add("fade");
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }
}

// Starts execution block every 1000ms (1 second)
function startAutoSlide() {
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 1000); 
}

// Resets timer on user interaction to prevent instant double skips
function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}