'use strict';

function borrarDato(name) {
    console.log("Estoy borrando...");
    // PARA BORRAR NECESITO RECONSTRUIR TODO EL 'localStorage' SIN EL DATO A BORRAR
    // ME QUEDO CON EL CONTENIDO DE 'localStorage'
    datos = JSON.parse(localStorage.getItem("localDatos"));
    let datosNew = [];
    // RECONSTRUYO TODO EL 'localStorage' SIN EL DATO A BORRAR
    for (let dato of datos) {
        if (dato.nombre != name) {
            datosNew.push(dato);
        }
    }
    // BORRO EL OBJETO DE 'localStorage'
    localStorage.setItem("localDatos", JSON.stringify(datosNew));
    mostrarDatos();
}