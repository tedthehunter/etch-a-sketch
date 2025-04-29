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
    pixel.addEventListener('mouseover', (event) => {
        //call color change function
        //call opacity change function
        event.target.style.opacity += 0.1;
    });
}

//define opacity change function
    //

//define color change function
    //store red variable - random 0 - 255
    //store green variable - random 0 - 255
    //store blue variable - random 0 - 255
    //return string rgb(red, green, blue)

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