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

    formMessage.textContent = 'Service not available currently!!';
    formMessage.style.color = 'white';

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


//experiences
document.addEventListener('DOMContentLoaded', () => {
    const exp1 = document.querySelector('.exp1');
    const exp2 = document.querySelector('.exp2');
    const experienceSection = document.getElementById('experience');
    const positions = document.querySelectorAll('.position');
    let currentIndex = 0;
    let isSplitted = false;

    window.addEventListener('scroll', function() {
        const rect = experienceSection.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        if (rect.top < screenHeight && rect.bottom >= 0 && !isSplitted) {
            exp1.style.transform = 'translateX(-80px) scale(0.5)';
            exp2.style.transform = 'translateX(80px) scale(0.5)';
            displayPosition(currentIndex);
            isSplitted = true;
        }
    });

    exp1.addEventListener('click', () => {
        if (currentIndex > 0) {
            hidePosition(currentIndex);
            currentIndex--;
            displayPosition(currentIndex);
        }
    });

    exp2.addEventListener('click', () => {
        if (currentIndex < positions.length - 1) {
            hidePosition(currentIndex);
            currentIndex++;
            displayPosition(currentIndex);
        }
    });

    function displayPosition(index) {
        positions[index].style.display = 'flex';
        setTimeout(() => {
            positions[index].style.opacity = 1;
            positions[index].style.transform = 'translateY(0)';
        }, 10); 
    }

    function hidePosition(index) {
        positions[index].style.opacity = 0;
        setTimeout(() => {
            positions[index].style.display = 'none';
        }, 500);
    }
});
