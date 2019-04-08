'use strict';

//Recoger la info del input
const inputEl = document.querySelector('.number__input');
//Recoger la info del botón
const ButtonEl = document.querySelector('.button')
//Función generadora de número aleatorio
function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
  }

//Función de mostrar contenido del input
function handleButtonClick(event){
    event.preventDefault();
    const writtenNumber = inputEl.value
    console.log ('El número escrito es ' + writtenNumber);
}

//Añadir listener al botón
ButtonEl.addEventListener('click', handleButtonClick);



console.log(getRandomNumber());
