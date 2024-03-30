"use strict";
let datos = [];
mostrarDatos();
// DATOS
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
// GUARDAR
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
  grabarDato(nombre.value, edad.value);
});
// BORRAR
const borrar = document.getElementById("borrar");
borrar.addEventListener("click", function () {
  borrarDato(nombre.value);
});

//EDITAR
const editar = document.getElementById("editar");
editar.addEventListener("click", function () {
  modificarDato(nombre.value, edad.value);
});
