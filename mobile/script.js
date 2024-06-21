document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                console.log('slide changed');
            },
        },
    });

    var percentages = [5, 10, 15, 20, 25];
    var currentPercentageIndex = 0;

    function updatePercentage() {
        var percentElement = document.getElementById('percent');
        var priceBtn = document.getElementById('price-btn');
        var percentage = percentages[currentPercentageIndex];
        percentElement.textContent = percentage + '%';
        priceBtn.textContent = (percentage * 2) + ' COM';
    }

    document.querySelector('.arrow.left').addEventListener('click', function () {
        currentPercentageIndex = (currentPercentageIndex - 1 + percentages.length) % percentages.length;
        updatePercentage();
    });

    document.querySelector('.arrow.right').addEventListener('click', function () {
        currentPercentageIndex = (currentPercentageIndex + 1) % percentages.length;
        updatePercentage();
    });

    updatePercentage();
});
