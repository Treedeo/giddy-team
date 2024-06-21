document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
