"use strict";

function mostrarDatos() {
  console.log("Mostrando datos...");
  console.log(sessionStorage);
  const cuerpo = document.getElementById("cuerpo"); // referencia al objeto html dónde voy a mostrar los datos

  if (
    sessionStorage.getItem("sessionAcceso") &&
    JSON.parse(sessionStorage.getItem("sessionAcceso")).length > 0
  ) {
    // si existe y hay al menos 1
    datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")); // guardo el JSON de la variable sessionStorage 'acceso' en el array 'datosAcceso'
    cuerpo.innerHTML = "Los datos almacenados son: <br />";

    datosAcceso.forEach(function (datoAcceso) {
      let linea = document.createElement("tr"), // creo una fila
        campoNombre = document.createElement("td"), // creo una celda para el nombre
        campoValor = document.createElement("td"), // creo una celda para la clave
        campoAcciones = document.createElement("td"); // creo una celda para el botón 'borrar'

      // DATOS

      campoNombre.innerHTML = datoAcceso.nombre; // escribo el nombre contenido en el array
      campoValor.innerHTML = datoAcceso.valor; // escribo el valor contenido en el array

      // BOTÓN BORRAR
      let botonBorrar = document.createElement("button"); // creo un botón
      botonBorrar.textContent = "Borrar"; // etiqueto el botón
      botonBorrar.className = "borrar"; // asigno el botón a una clase
      botonBorrar.addEventListener("click", function () {
        // añado al botón un evento de escucha (listener)
        borrarDato(datoAcceso.nombre); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
      });
      let imagenBorrar = document.createElement("img"); // creo una imagen
      imagenBorrar.src = "./img/delete.svg"; // añado al botón una imagen
      imagenBorrar.width = "22"; // añado al botón los estilos
      imagenBorrar.height = "22";
      imagenBorrar.style = "vertical-align: middle";

      // BOTÓN EDITAR
      let botonEditar = document.createElement("button"); // creo un botón
      botonEditar.textContent = "Editar"; // etiqueto el botón
      botonEditar.className = "editar"; // asigno el botón a una clase
      botonEditar.addEventListener("click", function (event) {
        // añado al botón un evento de escucha (listener)
        event.preventDefault();
        cargarDatosParaModificar(datoAcceso.nombre, datoAcceso.valor);
      });
      let imagenEditar = document.createElement("img"); // creo una imagen
      imagenEditar.src = "./img/lapiz.png"; // añado al botón una imagen
      imagenEditar.width = "22"; // añado al botón los estilos
      imagenEditar.height = "22";
      imagenEditar.style = "vertical-align: middle";

      // DOM
      botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
      campoAcciones.appendChild(botonBorrar); // añado el botón a la celda

      botonEditar.appendChild(imagenEditar); // añado la imagen al botón
      campoAcciones.appendChild(botonEditar); // añado el botón a la celda

      linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
      linea.appendChild(campoValor); // añado a la línea la celda con la clave
      linea.appendChild(campoAcciones); // añado a la línea la celda con el botón

      cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
    });
  } else {
    cuerpo.innerHTML = "No existen datos almacenados";
  }
  console.table(datosAcceso);
}
