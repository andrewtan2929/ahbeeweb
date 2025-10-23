// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const body = document.body;

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            const isOpen = body.classList.contains('mobile-nav-active');

            if (isOpen) {
                // Close menu (hamburger button becomes three lines)
                body.classList.remove('mobile-nav-active');
                hamburgerBtn.setAttribute('aria-label', 'Open mobile menu');
            } else {
                // Open menu (hamburger button becomes minus)
                body.classList.add('mobile-nav-active');
                hamburgerBtn.setAttribute('aria-label', 'Close mobile menu');
            }
        });
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            body.classList.remove('mobile-nav-active');
            hamburgerBtn.setAttribute('aria-label', 'Open mobile menu');
        });
    }

    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            body.classList.remove('mobile-nav-active');
            hamburgerBtn.setAttribute('aria-label', 'Open mobile menu');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && body.classList.contains('mobile-nav-active')) {
            body.classList.remove('mobile-nav-active');
            hamburgerBtn.setAttribute('aria-label', 'Open mobile menu');
        }
    });
});