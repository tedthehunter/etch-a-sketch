//store gridcontainer in variable
const generatePixel = () => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    gridContainer.appendChild(pixel);
}

//write for loop to call creation function 16x16 times