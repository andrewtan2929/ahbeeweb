// Portfolio Carousel - Safe version
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeCarousel, 100);
});

function initializeCarousel() {
    const mainImage = document.getElementById('main-image');

    // If no main image, this isn't a portfolio page - exit silently
    if (!mainImage) {
        return; // No error, just exit
    }

    // Rest of your portfolio code...
    console.log('Portfolio carousel initializing...');

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const thumbs = document.querySelectorAll('.thumb');

    console.log('Portfolio carousel initializing...');

    // Rest of your portfolio carousel code...
    const images = [
        '/images/1.png',
        '/images/2.png',
        '/images/3.png',
        '/images/4.png',
        '/images/5.png',
        '/images/6.png',
        '/images/7.png'
    ];

    let currentIndex = 0;

    function updateCarousel(index) {
        currentIndex = index;
        mainImage.src = images[index];
        mainImage.alt = `Project ${index + 1}`;

        thumbs.forEach((thumb, i) => {
            if (thumb) {
                thumb.classList.toggle('active', i === index);
            }
        });
    }

    function nextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        updateCarousel(nextIndex);
    }

    function prevImage() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(prevIndex);
    }

    // Only add event listeners if elements exist
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);

    thumbs.forEach((thumb, index) => {
        if (thumb) {
            thumb.addEventListener('click', () => updateCarousel(index));
        }
    });

    // Rest of your portfolio code...
}

