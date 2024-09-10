// Slideshow functionality
let slideshowImages = document.querySelectorAll('.slideshow img');
let slideshowNav = document.querySelector('.slideshow nav');
let currentImageIndex = 0;

slideshowNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('prev')) {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = slideshowImages.length - 1;
        }
    } else if (e.target.classList.contains('next')) {
        currentImageIndex++;
        if (currentImageIndex >= slideshowImages.length) {
            currentImageIndex = 0;
        }
    }
    slideshowImages.forEach((img) => {
        img.classList.remove('active');
    });
    slideshowImages[currentImageIndex].classList.add('active');
});