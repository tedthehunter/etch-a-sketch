const gridContainer = document.querySelector('#gridContainer');
const newGridButton = document.querySelector('#newGridButton');

newGridButton.addEventListener('click', () => {
    //anonymous function
    //prompt user for input number
        //from 1-100
        //call generation function with input num as side length
});

const generatePixel = (id, sideLength) => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = id;

    if (sideLength) {
        pixel.style.height = `${100 / sideLength}%`;
        pixel.style.width = `${100 / sideLength}%`;
    }

    gridContainer.appendChild(pixel);
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
    });
}

const newGrid = (sideLength) => {
    for (let i = 0; i < sideLength ** 2; i++) {
        generatePixel(i+1, sideLength);
    }
}

for (let i = 0; i < 16 ** 2; i++) {
    generatePixel(i+1, 16);
}