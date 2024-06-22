// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

// Обработчики для изменения скидки
const discountValue = document.querySelector('.discount-value');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const buyButton = document.querySelector('.buy-button');

let discount = 5;
leftArrow.addEventListener('click', () => {
    if (discount > 5) {
        discount -= 5;
        updateDiscount();
    }
});

rightArrow.addEventListener('click', () => {
    if (discount < 15) {
        discount += 5;
        updateDiscount();
    }
});

function updateDiscount() {
    discountValue.textContent = `${discount}%`;
    buyButton.textContent = `${discount * 2} COM`;
}

// Скрипт для адаптации контейнера в зависимости от размера экрана
window.addEventListener('resize', adjustContainerSize);

function adjustContainerSize() {
    const container = document.querySelector('.container');
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Устанавливаем размер контейнера в зависимости от размера окна
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;

    // Масштабирование контейнера
    const scaleX = width / 375; // 375 - базовая ширина (например, ширина iPhone 8)
    const scaleY = height / 667; // 667 - базовая высота (например, высота iPhone 8)
    const scale = Math.min(scaleX, scaleY);

    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'top left';
}

// Изначальная настройка контейнера при загрузке страницы
adjustContainerSize();
