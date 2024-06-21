function resizeContainer() {
    const container = document.querySelector('.container');
    const body = document.body;
    const scaleWidth = body.clientWidth / container.offsetWidth;
    const scaleHeight = body.clientHeight / container.offsetHeight;
    const scale = Math.min(scaleWidth, scaleHeight);

    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'top left';

    // Adjust the container height to prevent overflow
    container.style.height = `${container.offsetHeight * scale}px`;
}

window.addEventListener('resize', resizeContainer);
window.addEventListener('load', resizeContainer);
