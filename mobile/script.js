// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

// Скрипт для адаптации контейнера в зависимости от размера экрана
window.addEventListener('resize', adjustContainerSize);

function adjustContainerSize() {
    const container = document.querySelector('.container');
    const width = window.innerWidth;
    const height = window.innerHeight;

    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
}

// Изначальная настройка контейнера при загрузке страницы
adjustContainerSize();
