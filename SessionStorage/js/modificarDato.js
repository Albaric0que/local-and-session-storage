"use strict";

// Función para modificar un dato existente
function modificarDato(nombre, valor) {
  // Leer los datos existentes del sessionStorage
  let datos = obtenerDatos();

  // Buscar el dato por su nombre
  let datoExistente = datos.find((dato) => dato.nombre === nombre);

  // Si se encuentra el dato, modificar su valor
  if (datoExistente) {
    datoExistente.valor = valor;
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datos));
    mostrarDatos();
    console.log("El dato ha sido modificado.");
  } else {
    console.log("El dato no existe.");
  }
}

// Función para obtener un dato existente
function obtenerDatos() {
  // Obtener los datos del sessionStorage y convertirlos de nuevo a un arreglo de objetos
  let datos = sessionStorage.getItem("sessionAcceso");
  return datos ? JSON.parse(datos) : [];
}
