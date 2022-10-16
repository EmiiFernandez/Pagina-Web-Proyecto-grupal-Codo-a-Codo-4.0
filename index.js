let listProv = document.querySelector('#provincias')
function traer() {
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        result.provincias.forEach(function(element) {
            selectProvincia.innerHTML += `<option value="${element.id}">${element.nombre}</option>`
		})
    })
}
