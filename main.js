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
    //Si no has escrito nada
    if (!writtenNumber){
        hintEl.innerHTML = 'No has escrito nada';
    }
    //Si has escrito un número mayor que 100;
    else if (writtenNumber > 100){
        hintEl.innerHTML = 'El número escrito no debe ser mayor de 100';
    }
    //Si has escrito un número menor
    else if (randomNumber > writtenNumber){
        hintEl.innerHTML = 'Tu número es menor';
        //Y contamos los clicks
        clicks += 1;
        counterEl.innerHTML = clicks;
    }
    //Si has escrito un número mayor
    else if (randomNumber < writtenNumber){
        hintEl.innerHTML = 'Tu número es mayor';
        //Y contamos los clicks
        clicks += 1;
        counterEl.innerHTML = clicks;
    }
    //Si has escrito el número CORRECTO
    else if (randomNumber = writtenNumber){
        hintEl.innerHTML = '¡ACERTASTE';
        //Y contamos los clicks
        clicks += 1;
        counterEl.innerHTML = clicks;
    }

};

//Añadir listener al botón
buttonEl.addEventListener('click', handleButtonClick);


