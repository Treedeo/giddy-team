function detectDevice() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = 'mobile/index.html';
    } else {
        window.location.href = 'desktop/index.html';
    }
}

window.onload = detectDevice;
