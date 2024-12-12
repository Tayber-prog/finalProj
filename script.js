const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

// Initialize first testimonial
updateTestimonial(currentIndex);

// Navigation
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});

// Auto-cycle testimonials
const autoCycle = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}, 5000);


