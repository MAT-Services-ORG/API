document.addEventListener("DOMContentLoaded", () => {
    const blinkBlocs = document.querySelectorAll('blink');

    setInterval(() => {
        blinkBlocs.forEach((el) => {
            el.style.opacity = (el.style.opacity == "0") ? "1" : "0";
        });
    }, 500);
});
const style = document.createElement('style');
style.textContent = `
img, canvas, svg, video {
  image-rendering: pixelated;
}
`;
document.head.appendChild(style);