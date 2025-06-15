// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Quote Carousel
let currentQuote = 0;
const quotes = [
    {
        text: "This is nothing but prejudice, but spotting the name 'Squirly' on the running order suggests an act of little self-awareness, likely to be hilariously, unintentionally bad. <span class='highlight'>But how wrong that impression would be.</span>",
        author: "Chortle, 2016"
    },
    {
        text: "A refreshingly original voice in comedy with perfect timing and genuine wit.",
        author: "Comedy Review, 2017"
    },
    {
        text: "Squirly delivers laughs with intelligence and charm - a must-see performer.",
        author: "Festival Guide, 2018"
    }
];

function showQuote(index) {
    const slides = document.querySelectorAll('.quote-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (slides[index]) {
        slides[index].classList.add('active');
    }
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    updateQuoteContent();
}

function previousQuote() {
    currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    updateQuoteContent();
}

function updateQuoteContent() {
    const activeSlide = document.querySelector('.quote-slide.active');
    if (activeSlide) {
        const blockquote = activeSlide.querySelector('blockquote');
        const cite = activeSlide.querySelector('cite');
        
        if (blockquote && cite) {
            blockquote.innerHTML = quotes[currentQuote].text;
            cite.textContent = `- ${quotes[currentQuote].author}`;
        }
    }
}

// Auto-rotate quotes every 8 seconds
setInterval(nextQuote, 8000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(75, 57, 139, 0.98)';
    } else {
        navbar.style.background = 'rgba(75, 57, 139, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.content-section, .show-card, .about-content, .video-item, .blog-post, .contact-content');
    animateElements.forEach(el => observer.observe(el));
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Video placeholder interaction
const playButton = document.querySelector('.play-button');
if (playButton) {
    playButton.addEventListener('click', () => {
        alert('Video content coming soon! Stay tuned for updates.');
    });
}

// Show link interaction
const showLink = document.querySelector('.show-link');
if (showLink) {
    showLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Ticket booking system coming soon! Please check back later or contact directly for bookings.');
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading class to body when page loads
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard navigation for quotes
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousQuote();
    } else if (e.key === 'ArrowRight') {
        nextQuote();
    }
});

// Touch/swipe support for quote carousel
let touchStartX = 0;
let touchEndX = 0;

const quoteSection = document.querySelector('.quote-section');
if (quoteSection) {
    quoteSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    quoteSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextQuote(); // Swipe left - next quote
        } else {
            previousQuote(); // Swipe right - previous quote
        }
    }
}

// Initialize quote content on page load
document.addEventListener('DOMContentLoaded', () => {
    updateQuoteContent();
});

// Add active states for better UX
document.querySelectorAll('button, .nav-link, .show-link').forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('mouseup', () => {
        element.style.transform = '';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = '';
    });
});

// Console welcome message
console.log(`
🎭 Welcome to Squirly's Website!
Built with modern web technologies
Ready for customization and deployment
`);