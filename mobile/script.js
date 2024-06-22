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
    buyButton.textContent = `${discount * 2
