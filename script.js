const gridContainer = document.querySelector('#gridContainer');

const generatePixel = (id) => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = id;
    gridContainer.appendChild(pixel);
}

for (let i = 0; i < 256; i++) {
    generatePixel(i+1);
}