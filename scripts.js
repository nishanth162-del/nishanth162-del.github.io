const slides = document.querySelectorAll('.slides');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    restartSlideShow();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    restartSlideShow();
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

function restartSlideShow() {
    stopSlideShow();
    startSlideShow();
}

showSlide(currentSlide);
startSlideShow();

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

document.querySelector('.slideshow-container').addEventListener('mouseenter', stopSlideShow);
document.querySelector('.slideshow-container').addEventListener('mouseleave', startSlideShow);


let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.gallery-slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    slideIndex++;
    showSlides();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    slideIndex--;
    showSlides();
});

// Automatically move to the next slide every 5 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 5000);

showSlides(); // Initial call to display the slides
