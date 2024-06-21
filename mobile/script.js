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
    const paginationContainer = document.querySelector('.pagination-container');

    const width = window.innerWidth;
    const height = window.innerHeight;

    container.style.width = `${width}px`;
    container.style.height = `${height}px`;

    // Центрирование точек навигации в контейнере
    const paginationHeight = paginationContainer.offsetHeight;
    paginationContainer.style.lineHeight = `${paginationHeight}px`; // Центрирование по вертикали
}

// Изначальная настройка контейнера при загрузке страницы
adjustContainerSize();
