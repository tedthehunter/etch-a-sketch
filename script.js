const gridContainer = document.querySelector('#gridContainer');
const newGridButton = document.querySelector('#newGridButton');

newGridButton.addEventListener('click', () => {
    const sideLength = Number(prompt('Enter the length of one side of your drawing grid.', '16'));
    if (sideLength >= 1 && sideLength <= 100) {
        newGrid(sideLength);
    }
    else {
        alert('Please enter only whole numbers from 1-100.')
        newGrid(16);
    }

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
        pixel.style.backgroundColor = randomizeColor();
    });
}

//define opacity change function - node parameter
    //store node opacity in variable
    //return node opacity += 0.1

const randomizeColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

const testing = document.querySelector('#test');
const testIncrementOpacity = (element) => {
    element.style.opacity -= '-0.1';
}

const newGrid = (sideLength) => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.remove();
    });
    for (let i = 0; i < sideLength ** 2; i++) {
        generatePixel(i+1, sideLength);
    }
}

newGrid(16);
