"use strict";

// Función para modificar un dato existente
function modificarDato(nombre, edad) {
  // Leer los datos existentes del localStorage
  let datos = obtenerDatos();

  // Buscar el dato por su nombre
  let datoExistente = datos.find((dato) => dato.nombre === nombre);

  // Si se encuentra el dato, modificar su valor
  if (datoExistente) {
    datoExistente.edad = edad;
    localStorage.setItem("localDatos", JSON.stringify(datos));
    mostrarDatos();
    console.log("El dato ha sido modificado.");
  } else {
    console.log("El dato no existe.");
  }
}

// Función para obtener un dato existente
function obtenerDatos() {
  // Obtener los datos del localStorage y convertirlos de nuevo a un arreglo de objetos
  let datos = localStorage.getItem("localDatos");
  return datos ? JSON.parse(datos) : [];
}
