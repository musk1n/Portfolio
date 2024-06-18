document.getElementById('contactForm').addEventListener('submit', function(event) {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address!';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Thank you for your message!';
    formMessage.style.color = 'green';

    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// JavaScript for animating the line on scroll
document.addEventListener('DOMContentLoaded', function () {
    const animatedLine = document.querySelector('.animated-line');

    function animateLine() {
        const aboutSection = document.querySelector('.about');
        const aboutTop = aboutSection.offsetTop;
        const aboutHeight = aboutSection.clientHeight;

        if (window.scrollY > aboutTop - window.innerHeight / 2) {
            animatedLine.style.height = aboutHeight + 'px';
            animatedLine.style.opacity = 1;
        } else {
            animatedLine.style.height = '0';
            animatedLine.style.opacity = 0;
        }
    }

    // Initial call to set initial state
    animateLine();

    // Listen to scroll events
    window.addEventListener('scroll', animateLine);
});
