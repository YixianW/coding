// ================================================================
// PORTFOLIO WEBSITE JAVASCRIPT
// AI-assisted: lightbox modal and mobile nav; customized for accessibility and keyboard interaction
// ================================================================

// ================================================================
// MOBILE NAVIGATION TOGGLE
// ================================================================
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu on button click
mobileNavToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    mobileNavToggle.classList.toggle('active');
    mobileNavToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileNavToggle.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
    });
});

// ================================================================
// SEAL GALLERY LIGHTBOX
// ================================================================
// AI-assisted: modal structure with keyboard support and ARIA attributes
// Customized: added ESC key to close, focus management, and scroll prevention

// Seal data for lightbox
const sealData = [
    {
        src: 'assets/seal-01.jpg',
        alt: 'Stone seal carving featuring traditional script characters',
        caption: 'Traditional Script Seal'
    },
    {
        src: 'assets/seal-02.jpg',
        alt: 'Contemporary stone seal with bold geometric composition',
        caption: 'Contemporary Design'
    },
    {
        src: 'assets/seal-03.jpg',
        alt: 'Detailed stone seal showcasing intricate carving technique',
        caption: 'Intricate Carving Detail'
    },
    {
        src: 'assets/seal-04.jpg',
        alt: 'Stone seal print impression showing final result of carving',
        caption: 'Seal Impression Print'
    }
];

// Get lightbox elements
const lightbox = document.getElementById('seal-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxBackdrop = document.getElementById('lightbox-backdrop');

// Get all seal image buttons
const sealImageButtons = document.querySelectorAll('.seal-image-button');

// Store previous focused element for restoration
let previousFocusedElement = null;

// Open lightbox on image click
sealImageButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        openLightbox(index);
    });
});

// Function to open lightbox
function openLightbox(index) {
    const seal = sealData[index];
    
    // Set image and caption
    lightboxImage.src = seal.src;
    lightboxImage.alt = seal.alt;
    lightboxCaption.textContent = seal.caption;
    
    // Show lightbox
    lightbox.classList.remove('hidden');
    lightbox.setAttribute('aria-hidden', 'false');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Store current focus and set focus to close button
    previousFocusedElement = document.activeElement;
    lightboxClose.focus();
}

// Function to close lightbox
function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', 'true');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
    // Restore focus to previous element
    if (previousFocusedElement) {
        previousFocusedElement.focus();
    }
}

// Close lightbox on close button click
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox on backdrop click
lightboxBackdrop.addEventListener('click', closeLightbox);

// Close lightbox on ESC key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox();
    }
});

// Prevent closing when clicking on image content
lightboxImage.addEventListener('click', function(event) {
    event.stopPropagation();
});

// ================================================================
// SMOOTH SCROLL OFFSET FOR STICKY HEADER
// ================================================================
// Adjust scroll position to account for sticky header height
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================================================
// ACCESSIBILITY: SKIP LINK FUNCTIONALITY
// ================================================================
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', function(e) {
        const target = document.getElementById('main-content');
        if (target) {
            target.focus();
        }
    });
}

// ================================================================
// PAGE INITIALIZATION
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile nav state
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.classList.add('hidden');
    
    // Log accessibility check
    console.log('Portfolio website loaded. Accessibility features:');
    console.log('- Skip to content link enabled');
    console.log('- Mobile navigation toggle with ARIA labels');
    console.log('- Lightbox modal with ESC key support');
    console.log('- Semantic HTML with proper heading hierarchy');
});
