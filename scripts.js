const logos = document.querySelectorAll('.logo');
const dots = document.querySelectorAll('.dot');
const discountDisplay = document.getElementById('discount');
const priceDisplay = document.getElementById('price');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const companyButton = document.getElementById('company-button');

let currentLogoGroup = 0;
let currentDiscountIndex = 0;
const discounts = [
    { percent: '5%', price: '10 COM' },
    { percent: '10%', price: '20 COM' },
    { percent: '15%', price: '30 COM' },
];

function updateDiscount() {
    discountDisplay.textContent = discounts[currentDiscountIndex].percent;
    priceDisplay.textContent = discounts[currentDiscountIndex].price;
}

function swipeLogos(direction) {
    if (direction === 'next') {
        currentLogoGroup = (currentLogoGroup + 1) % 4; // Assuming 4 groups
    } else {
        currentLogoGroup = (currentLogoGroup - 1 + 4) % 4; // Assuming 4 groups
    }
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentLogoGroup ? 'black' : 'gray';
    });
    // Update logos visibility based on the currentLogoGroup
}

prevButton.addEventListener('click', () => {
    currentDiscountIndex = (currentDiscountIndex - 1 + discounts.length) % discounts.length;
    updateDiscount();
});

nextButton.addEventListener('click', () => {
    currentDiscountIndex = (currentDiscountIndex + 1) % discounts.length;
    updateDiscount();
});

companyButton.addEventListener('click', () => {
    // Logic to go back to the main menu
});

updateDiscount();
