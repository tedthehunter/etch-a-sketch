const gridContainer = document.querySelector('#gridContainer');
const newGridButton = document.querySelector('#newGridButton');

newGridButton.addEventListener('click', () => {
    //anonymous function
    //prompt user for input number
        //from 1-100
        //call generation function with input num as side length
});

const generatePixel = (id) => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = id;

    //add optional sideLength param
    //if sideLength exists
        //change height/width to 100/sideLength

    gridContainer.appendChild(pixel);
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
    });
}

//DECLARE function that creates new grid, with side length param
//for loop from 0 to side length squared
//generate pixels up to that amount, with side length arg


for (let i = 0; i < 256; i++) {
    generatePixel(i+1);
}