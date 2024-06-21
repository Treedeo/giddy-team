document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function() {
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach((slide) => {
                    if (slide.classList.contains('swiper-slide-active')) {
                        slide.style.opacity = '1';
                        slide.style.transform = 'translateX(0)';
                    } else {
                        slide.style.opacity = '0';
                        slide.style.transform = 'translateX(100%)';
                    }
                });
            },
        },
    });
});

let currentPercentage = 5;
let currentPrice = 10;

function changePercentage(direction) {
    const percentSpan = document.getElementById('percent');
    const priceBtn = document.getElementById('price-btn');
    if (direction === 1 && currentPercentage < 15) {
        currentPercentage += 5;
    } else if (direction === -1 && currentPercentage > 5) {
        currentPercentage -= 5;
    }
    currentPrice = currentPercentage * 2;
    percentSpan.textContent = `${currentPercentage}%`;
    priceBtn.textContent = `${currentPrice} COM`;
}

const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        tiles.forEach(t => t.style.display = 'none');
        tile.style.width = '300px';
        tile.style.height = '300px';
        tile.style.fontSize = '48px';
        tile.textContent = tile.id.replace('tile', '');
    });
});
