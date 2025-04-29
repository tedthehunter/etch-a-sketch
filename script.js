const gridContainer = document.querySelector('#gridContainer');

const generatePixel = () => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    gridContainer.appendChild(pixel);
}

generatePixel();
//write for loop to call creation function 16x16 times