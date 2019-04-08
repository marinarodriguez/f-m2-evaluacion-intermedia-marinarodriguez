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
let randomNumber = '';
let clicks = 0;

//Función generadora de número aleatorio
function getRandomNumber() {
     randomNumber = Math.ceil(Math.random() * 100);
     return 'El número generado es ' + randomNumber;
  }

console.log(getRandomNumber());

//Función de mostrar contenido del input
function handleButtonClick(event){
    event.preventDefault();
    const writtenNumber = inputEl.value;
    console.log('El número escrito es ' + writtenNumber);
    if (randomNumber > writtenNumber){
        hintEl.innerHTML = 'Tu número es menor';
    }
    else if (randomNumber < writtenNumber){
        hintEl.innerHTML = 'Tu número es mayor';
    }
    else if (randomNumber = writtenNumber){
        hintEl.innerHTML = 'ACERTASTE';
    }

    //Contador
    clicks += 1;
    counterEl.innerHTML = clicks;
};

//Añadir listener al botón
buttonEl.addEventListener('click', handleButtonClick);


