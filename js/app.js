/** VARIABLES */
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
//Regex validation for email
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();
function eventListeners(){
    //Para arrancar la app
    document.addEventListener('DOMContentLoaded',iniciarApp);
    //Campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
    //Enviar mail
    formulario.addEventListener('submit',enviarEmail);
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
        //Elimina los errores
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
        
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
    }
    else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios.');
    }
    
    //Validate email
    if (e.target.type==='email') {
        if( er.test( e.target.value) ){
            const error = document.querySelector('p.error');
            if (error != null) {
                error.remove();
            }
            
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');
        }
        else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('Email no valido.');
        }
    
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disable=false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }else{

    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500', 'background-color-100','text-red-500','p-3','mt-5','text-center','error');//Tailwind classes
    const errores = document.querySelectorAll('.error');//Reviso si error existe previamente
    if(errores.length === 0){//.length solo existe en querySelectorAll
        formulario.appendChild(mensajeError);
    }
    
    
}

//Envia el email
function enviarEmail(e){
    e.preventDefault();
    //Mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display='flex';

    //Despues de 4 segundos ocultar el spinner y mostarr el mensaje
    setTimeout(()=>{
        spinner.style.display='none';
        //Mensaje de enviado
        const parrafo = document.createElement('p');
        parrafo.textContent='El mensaje se envio correctamente!';
        formulario.insertBefore(parrafo,spinner);
        parrafo.classList.add('text-center','my-10','background-color-500', 'p-2', 'bg-green-500','text-white', 'font-bold', 'uppercase');
        setTimeout(()=>{
            parrafo.remove();
        },3000);

    },4000);//Despues de 4 segundos
}

