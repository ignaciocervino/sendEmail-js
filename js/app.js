//Variables

const btnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',iniciarApp);
}


//Funciones
function iniciarApp(){
    btnEnviar.disable=true;
    //1° Deshabilito el boton de enviar
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}