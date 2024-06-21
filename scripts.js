document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Настройка событий для мыши
    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        gallery.classList.add('active');
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 3; // Умножаем на 3 для увеличения скорости скроллинга
        gallery.scrollLeft = scrollLeft - walk;
    });

    // Настройка событий для тачскринов
    gallery.addEventListener('touchstart', (e) => {
        isDown = true;
        gallery.classList.add('active');
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    }, {passive: true});

    gallery.addEventListener('touchend', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX) * 3; // Умножаем на 3 для увеличения скорости скроллинга
        gallery.scrollLeft = scrollLeft - walk;
    }, {passive: true});
});
