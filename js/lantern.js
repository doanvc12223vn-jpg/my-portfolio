const lantern = document.getElementById('lantern');
const images = lantern.querySelectorAll('img');
const radius = 120;
let angle = 0;
let isPaused = false;

function rotateLantern() {
    if (!isPaused) {
        angle += 0.5;
    }

    images.forEach((img, index) => {
        const theta = (360 / images.length) * index + angle;
        const x = radius * Math.cos(theta * Math.PI / 180);
        const y = radius * Math.sin(theta * Math.PI / 180);

        img.style.transform = `translate(${x + 90}px, ${y + 110}px)`;
    });

    requestAnimationFrame(rotateLantern);
}

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    img.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});

rotateLantern();
