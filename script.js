// Cursor glow effect
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Scroll progress indicator
const scrollIndicator = document.getElementById('scrollIndicator');

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + '%';
    
    // Dynamic text color based on scroll with improved visibility
    updateTextColors(scrolled);
});

function updateTextColors(scrollPercentage) {
    const dynamicElements = document.querySelectorAll('.dynamic-text');
    
    // Calculate color based on scroll percentage
    // Ensuring text is always visible - dark text on light bg, light text on dark bg
    let r, g, b;
    
    if (scrollPercentage < 30) {
        // Very light background - keep text dark
        r = 25;
        g = 25;
        b = 25;
    } else if (scrollPercentage < 50) {
        // Light to medium background - gradually lighten text
        const factor = (scrollPercentage - 30) / 20;
        r = Math.round(25 + (75 * factor));
        g = Math.round(25 + (75 * factor));
        b = Math.round(25 + (75 * factor));
    } else if (scrollPercentage < 70) {
        // Medium background - medium text
        const factor = (scrollPercentage - 50) / 20;
        r = Math.round(100 + (55 * factor));
        g = Math.round(100 + (55 * factor));
        b = Math.round(100 + (55 * factor));
    } else {
        // Dark background - keep text light for maximum contrast
        const factor = (scrollPercentage - 70) / 30;
        r = Math.round(155 + (95 * factor));
        g = Math.round(155 + (95 * factor));
        b = Math.round(155 + (95 * factor));
    }
    
    dynamicElements.forEach(el => {
        el.style.color = `rgb(${r}, ${g}, ${b})`;
    });

    // Update border and background colors for better visibility
    const skillCategories = document.querySelectorAll('.skill-category');
    const contactItems = document.querySelectorAll('.contact-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (scrollPercentage > 60) {
        // Dark section - lighter borders and backgrounds
        skillCategories.forEach(el => {
            el.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            el.style.background = 'rgba(255, 255, 255, 0.08)';
        });
        contactItems.forEach(el => {
            el.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            el.style.background = 'rgba(255, 255, 255, 0.08)';
        });
        projectCards.forEach(el => {
            el.style.borderLeftColor = 'rgba(255, 255, 255, 0.3)';
        });
    } else {
        // Light section - darker borders and backgrounds
        skillCategories.forEach(el => {
            el.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            el.style.background = 'rgba(255, 255, 255, 0.3)';
        });
        contactItems.forEach(el => {
            el.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            el.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        projectCards.forEach(el => {
            el.style.borderLeftColor = 'rgba(0, 0, 0, 0.1)';
        });
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill categories and project cards for fade-in animation
document.querySelectorAll('.skill-category, .project-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .section-header');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Initialize text colors on load
updateTextColors(0);

// Add skill tag hover sound effect (visual feedback)
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console greeting
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #B4643C; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, and Vanilla JavaScript', 'color: #666; font-size: 12px;');