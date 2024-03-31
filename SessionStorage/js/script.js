"use strict";

let datosAcceso = []; // 'array' dónde almaceno los valos de nombre y clave

if (window.sessionStorage) {
  const nombre = document.getElementById("nombre"); // para acceder al valor del input para el nombre
  const valor = document.getElementById("valor"); // para acceder al valor del input para la clave
  const grabar = document.getElementById("guardar"); // para comprobar cuando se ha pulsado el bóton 'guardar'
  const editar = document.getElementById("editar"); // para comprobar cuando se ha pulsado el bóton 'editar'

  mostrarDatos(); // nada más cargar la página muestro el contenido de 'sessionStorage'

  grabar.addEventListener("click", function (evento) {
    // escucho la pulsación del botón 'guardar'
    grabarDato(nombre.value, valor.value);
  });

  editar.addEventListener("click", function (evento) {
    // escucho la pulsación del botón 'editar'
    modificarDato(nombre.value, valor.value);
  });
} else {
  alert("El navegador no soporta sessionStorage");
}
