
function validarInformacion() {
   let nombre = document.getElementById('nombre');
   let correoelectronico = document.getElementById('correo electronico');

   console.log('Enviando formulario...');

   let errores = [];

   if(nombre.length < 3){
       errores.push("El nombre debe tener al menos 3 caracteres.")
   }

   if(nombre == "" || nombre == null){
      errores.push("El nombre debe tener al menos 3 caracteres.")
  }

   if(correoelectronico == "" || correoelectronico == null){
       errores.push("Ingresar un correo electrónico")
   }

   return errores;
}

validarInformacion(); 