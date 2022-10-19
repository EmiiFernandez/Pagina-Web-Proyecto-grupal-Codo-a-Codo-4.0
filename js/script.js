//API
const $document = document;
const $selectProvincias = $document.getElementById("selectProvincias");

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $listProvincias = `<option value = "Selecciona una provincia">Selecciona una provincia</option>`;
        
        json.provincias.forEach(prov => $listProvincias += `<option value="${prov.nombre}">${prov.nombre}</option>`);

        $selectProvincias.innerHTML = $listProvincias;
    })
    .catch(error => {
        let  message = error.statusText || "Upss, ocurrió un error";

        $selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$document.addEventListener("DOMContentLoaded", provincia);
