let nombre = document.getElementById('nombre');
let correoelectronico = document.getElementById('correo electronico');
let error = document.getElementById('error');
error.style.color = 'red';

function  enviarFormulario(){
   console.log('Enviando formulario...'); 
 let mensajesError = [];

 if(nombre.value === null || exampleFormControlInput1.value === ''){
    mensajesError.push('Ingresa tu nombre');
 }

 if(correoelectronico.value === null || exampleFormControlInput1.value === ''){
    mensajesError.push('Ingresa tu correo electronico');
 }

 error.innerHTML = mensajesError.join(', ');
    return false;

}
    
