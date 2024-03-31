'use strict';

function grabarDato(name, value) {
    console.log("Grabando dato...");
    datosAcceso.push({
        nombre: name,
        valor: value
    }); // introduzco los datos: nombre y clave, en el 'array'

    // guardo los datos del 'array' convirtiendolos en JSON en una variable localStorage llamada 'acceso'
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso)); 

    mostrarDatos(); // vuelvo a mostrar los datos
}