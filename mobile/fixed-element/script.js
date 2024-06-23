document.addEventListener('DOMContentLoaded', function() {
    const fixedElement = document.getElementById('fixed-element');
    const loginField = document.getElementById('login');
    const passwordField = document.getElementById('password');
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

    fixedElement.addEventListener('click', function() {
        fixedElement.classList.toggle('open');
        if (fixedElement.classList.contains('open')) {
            showFields();
        } else {
            hideFields();
        }
    });

    function showFields() {
        loginField.classList.add('show');
        passwordField.classList.add('show');
    }

    function hideFields() {
        loginField.classList.remove('show');
        passwordField.classList.remove('show');
    }
});
