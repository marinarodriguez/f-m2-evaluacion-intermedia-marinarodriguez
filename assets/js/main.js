'use strict';


const inputEl = document.querySelector('.number__input');

const buttonEl = document.querySelector('.button');

const hintEl = document.querySelector('.hint__text');

const counterEl = document.querySelector('.counter');

const resetButtonEl = document.querySelector('.reset__button');

let clicks = 0;

//Función generadora de número aleatorio
function getRandomNumber(max) {
     return Math.ceil(Math.random() * max);
}
  
let randomNumber = getRandomNumber(100);

console.log(randomNumber);

const counterClick = () => {
    clicks += 1;
    counterEl.innerHTML = clicks;
}

const counterClickReset = () => {
    clicks = 0;
    counterEl.innerHTML = clicks;
}

const printHint = (message) => {
    return hintEl.innerHTML = message;
}

const feedBackLogic = (writtenNumber,randomNumber) => {
    if (!writtenNumber){
        printHint('No has escrito nada');
    }
    else if (writtenNumber > 100 || writtenNumber < 0 ){
        printHint('El número escrito debe ser mayor que 0 y menor que 100');
    }
    else if (randomNumber > writtenNumber){
        printHint('Tu número es menor');
    }
    else if (randomNumber < writtenNumber){
        printHint('Tu número es mayor');
    }
    else if (randomNumber === writtenNumber){
        printHint('¡ACERTASTE!');
    }
}

function handleButtonClick(event){
    event.preventDefault();

    const writtenNumberString = inputEl.value;
    const writtenNumber = parseInt(writtenNumberString);

    console.log('El número escrito es ' + writtenNumber);

    feedBackLogic(writtenNumber,randomNumber);
    counterClick();
}

function handleResetButtonClick(event){
    event.preventDefault();

    printHint('Escribe un número y dale a Prueba');
    counterClickReset();
    inputEl.value = '';
    randomNumber = getRandomNumber(100);
    console.log(randomNumber);

}

buttonEl.addEventListener('click', handleButtonClick);
resetButtonEl.addEventListener('click', handleResetButtonClick);


