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
        console.log('Showing fields'); // Debugging
        fixedElementHeader.style.opacity = 1;
        loginField.classList.add('show');
        passwordField.classList.add('show');
    }

    function hideFields() {
        console.log('Hiding fields'); // Debugging
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
            console.log('Swipe up detected'); // Debugging
            fixedElement.classList.add('open');
            showFields();
        } else if (touchY - startY > 50) { // Проводим пальцем вниз
            console.log('Swipe down detected'); // Debugging
            fixedElement.classList.remove('open');
            hideFields();
        }
    });

    registration.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        console.log('Registration button clicked'); // Debugging
        emailField.style.display = 'block';
        setTimeout(() => {
            console.log('Adding show class to email field'); // Debugging
            emailField.classList.add('show');
        }, 0);
    });

    login.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        console.log('Login button clicked'); // Debugging
        emailField.style.display = 'none';
        emailField.classList.remove('show');
    });

    document.addEventListener('click', function(event) {
        if (!fixedElement.contains(event.target) && fixedElement.classList.contains('open')) {
            console.log('Click outside detected, hiding fields'); // Debugging
            fixedElement.classList.remove('open');
            hideFields();
        }
    });

    fixedElement.addEventListener('click', function(event) {
        if (!fixedElement.classList.contains('open')) {
            console.log('Fixed element clicked to open'); // Debugging
            fixedElement.classList.add('open');
            showFields();
        }
    });
});
