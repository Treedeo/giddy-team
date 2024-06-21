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
        currentLogoGroup = (currentLogoGroup + 1) % dots.length; // Assuming dots.length groups
    } else if (direction === 'prev') {
        currentLogoGroup = (currentLogoGroup - 1 + dots.length) % dots.length; // Assuming dots.length groups
    }
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.className = index === currentLogoGroup ? 'dot active' : 'dot';
    });
}

prevButton.addEventListener('click', () => {
    swipeLogos('prev');
    currentDiscountIndex = (currentDiscountIndex - 1 + discounts.length) % discounts.length;
    updateDiscount();
});

nextButton.addEventListener('click', () => {
    swipeLogos('next');
    currentDiscountIndex = (currentDiscountIndex + 1) % discounts.length;
    updateDiscount();
});

companyButton.addEventListener('click', () => {
    // Logic to go back to the main menu
    // Placeholder for returning to the main logo group and resetting discounts
    currentLogoGroup = 0;
    currentDiscountIndex = 0;
    updateDots();
    updateDiscount();
});

// Initial setup
updateDots();
updateDiscount();
