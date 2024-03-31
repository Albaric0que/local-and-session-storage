'use strict';

function grabarDato(name, age) {
    console.log("Estoy grabando...");
    // PREPARO EL OBJETO {nombre, edad} QUE VOY A GRABAR
    datos.push({
        nombre: name,
        edad: age
    });
    // GRABO EL OBJETO EN 'localStorage'
    localStorage.setItem("localDatos", JSON.stringify(datos));
    mostrarDatos();
}