/** VARIABLES */
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
eventListeners();
function eventListeners(){
    //Para arrancar la app
    document.addEventListener('DOMContentLoaded',iniciarApp);
    //Campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
}


/** FUNCIONES */
function iniciarApp(){
   btnEnviar.disable=true;
    //1° Deshabilito el boton de enviar
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

//Valida formulario
function validarFormulario(e){

    if(e.target.value.length>0){
        console.log('Si hay algo');
    }
    else{
        e.target.classList.add('border','border-red-500');
        mostrarError();
    }
}

function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border','border-red-500', 'background-color-100','text-red-500','p-3','mt-5','text-center','error');//Tailwind classes
    const errores = document.querySelectorAll('.error');//Reviso si error existe previamente
    if(errores.length ===0){//.length solo existe en querySelectorAll
        formulario.appendChild(mensajeError);
    }
    
}