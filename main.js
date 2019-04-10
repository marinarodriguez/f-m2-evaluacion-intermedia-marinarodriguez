'use strict';

//Recoger la info del input
const inputEl = document.querySelector('.number__input');
//Recoger la info del botón
const buttonEl = document.querySelector('.button');
//Recoger la caja de pistas
const hintEl = document.querySelector('.hint__text');
//Recoger contador 
const counterEl = document.querySelector('.counter');
//Declarar número aleatorio
let clicks = 0;

//Función generadora de número aleatorio
function getRandomNumber(max) {
     return Math.ceil(Math.random() * max);
  }
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const counterClick = () => {
    clicks += 1;
    counterEl.innerHTML = clicks;
}
const printHint = (message) => {
    return hintEl.innerHTML = message;
}
//Función de mostrar contenido del input
function handleButtonClick(event){
    event.preventDefault();

    const writtenNumberString = inputEl.value;
    const writtenNumber = parseInt(writtenNumberString);

    console.log('El número escrito es ' + writtenNumber);

    const feedBackLogic = () => {
        if (!writtenNumber){
            printHint('No has escrito nada');
        }
        //Si has escrito un número mayor que 100;
        else if (writtenNumber > 100 || writtenNumber < 0 ){
            printHint('El número escrito debe ser mayor que 0 y menor que 100');
        }
        //Si has escrito un número menor
        else if (randomNumber > writtenNumber){
            printHint('Tu número es menor');
        }
        //Si has escrito un número mayor
        else if (randomNumber < writtenNumber){
            printHint('Tu número es mayor');
        }
        //Si has escrito el número CORRECTO
        else if (randomNumber === writtenNumber){
            printHint('¡ACERTASTE!');
        }
    }

    feedBackLogic();
    counterClick();
}



//Añadir listener al botón
buttonEl.addEventListener('click', handleButtonClick);


