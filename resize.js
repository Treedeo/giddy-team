function resizeContainer() {
    const container = document.querySelector('.container');
    const body = document.body;
    const scale = Math.min(
        body.clientWidth / container.offsetWidth,
        body.clientHeight / container.offsetHeight
    );
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'top left';
}

window.addEventListener('resize', resizeContainer);
window.addEventListener('load', resizeContainer);
