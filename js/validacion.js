window.addEventListener("load", function () {

    /*Estado por defecto - Guardo los datos del usuario*/
    const estadoUsuario = {
        nombre: "",
        email: "",
        provincia: "",
        mensaje: ""
    };

    /*Estado de los errores - Agrego los mensajes de error*/
    const estadoErrores = {
        nombre: false,
        email: false,
        provincia: false,
        mensaje: false
    };

    const form = document.querySelector('form');
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputProv = document.getElementById('selectProvincias');
    const inputMensaje = document.getElementById('mensaje');

    form.addEventListener('change', () => {
        estadoErrores.nombre = validNombre(inputNombre.value);
        estadoErrores.email = validEmail(inputEmail.value);
        estadoErrores.provincia = validProv(inputProv.value);
        estadoErrores.mensaje = validMensaje(inputMensaje);

        mostrarErrores(estadoErrores);

    })

    //Funciones para validar los datos

    function validNombre(nombre) {
        let regexName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
        if (regexName.test(nombre)) {
            return true;
        }
    }


    function validEmail(email) {
        let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        //console.log(regex.test(email));

        return regex.test(email); //Devuelve true o false
    }

    function validProv(provincia) {
        if (provincia.value != "Selecciona una provincia") {
            return true
        }
    }

    function validMensaje(mensaje) {
        if (mensaje != "" || mensaje != null) {
            return true
        }
    }

    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const provError = document.getElementById('provError');
    const textError = document.getElementById('textError')

    function mostrarErrores(estadoErrores){
        inputNombre.addEventListener('blur', () => {
            estadoErrores.nombre ? nombreError.classList.remove('visible') : nombreError.classList.add('visible');
        })

        inputEmail.addEventListener('blur', () => {
            estadoErrores.email ? emailError.classList.remove('visible') : 
            emailError.classList.add('visible');
            
        })
        
        inputProv.addEventListener('blur', () => {
            estadoErrores.prov ? provError.classList.remove('visible') : provError.classList.add('visible');
        })
        
        inputMensaje.addEventListener('blur', () => {
            estadoErrores.text ? textError.classList.remove('visible') : textError.classList.add('visible');
    
        })
        
    }

});