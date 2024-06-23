document.addEventListener('DOMContentLoaded', function() {
    const fixedElement = document.getElementById('fixed-element');
    const fixedElementHeader = document.querySelector('.fixed-element-header');
    const loginField = document.getElementById('loginField');
    const passwordField = document.getElementById('password');
    const emailField = document.getElementById('email');
    const registration = document.getElementById('registration');
    const login = document.getElementById('login');
    let startY;

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
        emailField.classList.remove('show');
    }

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

    registration.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        emailField.style.display = 'block';
        setTimeout(() => {
            emailField.classList.add('show');
        }, 0);
    });

    login.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
    });

    document.addEventListener('click', function(event) {
        if (!fixedElement.contains(event.target) && fixedElement.classList.contains('open')) {
            fixedElement.classList.remove('open');
            hideFields();
        }
    });

    fixedElement.addEventListener('click', function(event) {
        if (!fixedElement.classList.contains('open')) {
            fixedElement.classList.add('open');
            showFields();
        }
    });
});
