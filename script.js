function resizeContainer() {
    const container = document.querySelector('.container');
    const body = document.body;
    const scaleWidth = body.clientWidth / container.offsetWidth;
    const scaleHeight = body.clientHeight / container.offsetHeight;
    const scale = Math.min(scaleWidth, scaleHeight) * 0.9; // Уменьшение на 10%

    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'top center';

    // Center the container vertically
    const marginTop = (body.clientHeight - container.offsetHeight * scale) / 2;
    container.style.marginTop = `${marginTop}px`;
}

window.addEventListener('resize', resizeContainer);
window.addEventListener('load', resizeContainer);
