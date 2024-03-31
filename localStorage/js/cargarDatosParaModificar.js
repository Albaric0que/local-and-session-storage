"use strict";

function cargarDatosParaModificar(nombre, edad) {
  // Obtener los elementos de entrada por su ID
  const inputNombre = document.getElementById("nombre");
  const inputEdad = document.getElementById("edad");

  // Asignar los valores a los campos de entrada
  inputNombre.value = nombre;
  inputEdad.value = edad;
}
