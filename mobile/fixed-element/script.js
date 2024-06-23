document.addEventListener('DOMContentLoaded', function() {
    const fixedElement = document.getElementById('fixed-element');
    let startY;

    fixedElement.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
    });

    fixedElement.addEventListener('touchmove', function(event) {
        const touchY = event.touches[0].clientY;
        if (startY - touchY > 50) { // Проводим пальцем вверх
            fixedElement.classList.add('open');
        } else if (touchY - startY > 50) { // Проводим пальцем вниз
            fixedElement.classList.remove('open');
        }
    });

    fixedElement.addEventListener('click', function() {
        fixedElement.classList.toggle('open');
    });
});
