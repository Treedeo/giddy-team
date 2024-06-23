document.addEventListener('DOMContentLoaded', function() {
    const fixedElement = document.getElementById('fixed-element');
    const fixedElementHeader = document.querySelector('.fixed-element-header');
    const loginField = document.getElementById('login');
    const passwordField = document.getElementById('password');
    const emailField = document.getElementById('email');
    const registration = document.getElementById('registration');
    let startY;

    fixedElement.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
    });

    fixedElement.addEventListener('touchmove', function(event) {
        const touchY = event.touches[0].clientY;
        if (startY - touchY > 50) { // Проводим пальцем вверх
            fixedElement.classList.add('open');
            showFields();
        } else if (touchY - startY > 50) { // Проводим пальцем вниз
            fixedElement.classList.remove('open');
            hideFields();
        }
    });

    fixedElement.addEventListener('click', function(event) {
        if (event.target !== loginField && event.target !== passwordField && event.target !== registration) {
            fixedElement.classList.toggle('open');
            if (fixedElement.classList.contains('open')) {
                showFields();
            } else {
                hideFields();
            }
        }
    });

    registration.addEventListener('click', function() {
        emailField.style.display = 'block';
        setTimeout(() => {
            emailField.style.opacity = 1;
            emailField.style.transform = 'translateY(0)';
        }, 0);
    });

    function showFields() {
        fixedElementHeader.style.opacity = 1;
        loginField.classList.add('show');
        passwordField.classList.add('show');
    }

    function hideFields() {
        fixedElementHeader.style.opacity = 0;
        loginField.classList.remove('show');
        passwordField.classList.remove('show');
        emailField.style.display = 'none';
        emailField.style.opacity = 0;
        emailField.style.transform = 'translateY(20px)';
    }
});
