function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = 'flex'; // Show the lightbox
    lightboxImg.src = img.src; // Set the lightbox image to the clicked image
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

function toggleInfo() {
    const infoBox = document.getElementById('info-box');
    if (infoBox.style.display === 'block') {
        infoBox.style.display = 'none'; // Hide the info box
    } else {
        infoBox.style.display = 'block'; // Show the info box
    }
}