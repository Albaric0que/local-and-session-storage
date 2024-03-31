"use strict";

function cargarDatosParaModificar(nombre, valor) {
  console.log("Estoy cargando los datos en el input");
  // Obtener los elementos de entrada por su ID
  const inputNombre = document.getElementById("nombre");
  const inputValor = document.getElementById("valor");

  // Asignar los valores a los campos de entrada
  inputNombre.value = nombre;
  inputValor.value = valor;
}
