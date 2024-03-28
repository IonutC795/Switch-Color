const listOfColors = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];

// const colorSwitcherButton = document.querySelector('.color-switcher-button');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const currentColor = document.querySelector('.color-switcher-text-color');
const counterShiftColors = document.getElementById('counter-shift-colors');
const resetButton = document.querySelector('.reset-color-switcher-button');
const previousButton = document.querySelector('.previous-color-button');
const nextButton = document.querySelector('.next-color-button');

let index = 0;
let counter = 0;


const switchColor = () => {
    counter++;

    if (counter === 1) {
        counterShiftColors.textContent = "Culoarea a fost schimbata o data.";
    } else {
        counterShiftColors.textContent = "Culoarea a fost schimbata de " + counter + " ori.";
    }

    const currentBackgroundColor = listOfColors[index];

    currentColor.style.color = currentBackgroundColor;

    counterShiftColors.style.opacity = '1';
   

    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    
    resetButton.style.opacity = '1'; 

    // index++;  //For Click me button

    // if (index === 5) {
    //     index = 0;
    // };
};

const previousColorButton = () => {
    index--;

    if (index < 0) {
        index = listOfColors.length - 1;
    }

    switchColor ();
}

const nextColorButton = () => {
    index++;

    if (index >= listOfColors.length) {
        index = 0;
    } if (index === 5) {
        index = 0;
    };

    switchColor();
};

const resetColorToFirstOne = () => {
    index = 0;
    
    switchColor ();

    counter = 0;

    counterShiftColors.style.opacity = '0';
    resetButton.style.opacity = '0';
    
};



// colorSwitcherButton.addEventListener('click', switchColor); //For Click me button
resetButton.addEventListener('click', resetColorToFirstOne);
previousButton.addEventListener('click', previousColorButton);
nextButton.addEventListener('click', nextColorButton);
