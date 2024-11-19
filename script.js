// script.js


 const slides = document.querySelectorAll(".slide");
 const dots = document.querySelectorAll(".dot");
 let currentSlide = 0;

 // Show slide based on index
 function showSlide(index) {
   slides.forEach((slide, i) => {
     slide.classList.toggle("active", i === index);
     dots[i].classList.toggle("active", i === index);
   });
 }

 // Move to the next slide
 function nextSlide() {
   currentSlide = (currentSlide + 1) % slides.length;
   showSlide(currentSlide);
 }

 // Auto-slide every 3 seconds
 let slideInterval = setInterval(nextSlide, 3000);

 // Handle dot navigation
 dots.forEach((dot) => {
   dot.addEventListener("click", (e) => {
     clearInterval(slideInterval); // Stop auto-slide when user interacts
     currentSlide = parseInt(e.target.dataset.slide, 10);
     showSlide(currentSlide);
     slideInterval = setInterval(nextSlide, 3000); // Restart auto-slide
   });
 });

 // Initialize the first slide
 showSlide(currentSlide);

