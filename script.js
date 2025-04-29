const gridContainer = document.querySelector('#gridContainer');

const generatePixel = () => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    gridContainer.appendChild(pixel);
}

generatePixel();

for (let i = 0; i < 256; i++) {
    generatePixel();
}