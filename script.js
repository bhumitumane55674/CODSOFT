const words = [
    "Web Developer",
    "Problem Solver",
    "Fronted Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex =  0;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if(charIndex < words[wordIndex]. length){
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if(typingElement.textContent.length > 0){
        typingElement.textContent = typingElement.textContent.slice(0,-1);
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex++;
        if(wordIndex >= words.length){
            wordIndex = 0;
        }
        charIndex = 0;
        setTimeout(typeEffect, 300);
    }
}


// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: Uncomment the next line if you want animations to run only once
            // observer.unobserve(entry.target); 
        } else {
            // Optional: Remove class when element is out of view to re-animate when scrolled back
            entry.target.classList.remove('show');
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    // Initialize typing effect
    typeEffect();
    
    // Initialize scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// Contact Form Handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! Your message has been received.");
        this.reset();
    });
}