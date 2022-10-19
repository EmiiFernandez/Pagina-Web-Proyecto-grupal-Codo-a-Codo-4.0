var nombre = document.getElementById('nombre');
var correoelectronico = document.getElementById('correo electronico');
var error = document.getElementById('error');
error.style.color = 'red';

function  enviarFormulario(){
   console.log('Enviando formulario...'); 
 var mensajesError = [];

 if(nombre.value === null || exampleFormControlInput1.value === ''){
    mensajesError.push('Ingresa tu nombre');
 }

 if(correoelectronico.value === null || exampleFormControlInput1.value === ''){
    mensajesError.push('Ingresa tu correo electronico');
 }

 error.innerHTML = mensajesError.join(', ');
    return false;

}
    
