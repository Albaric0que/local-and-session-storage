"use strict";

function mostrarDatos() {
  console.log("Estoy mostrando...");
  const cuerpo = document.getElementById("cuerpo");

  // SI EXISTE UNA ESTRUCTURA DE 'localStorage' Y TIENE ALGO
  if (
    localStorage.getItem("localDatos") &&
    JSON.parse(localStorage.getItem("localDatos")).length > 0
  ) {
    cuerpo.innerHTML = "Los datos almacenados son: <br />";
    datos = JSON.parse(localStorage.getItem("localDatos"));
    for (let dato of datos) {
      // PARA CADA dato DE datos [nombre1=valor1, nombre2=valor2...]
      // CREO tr, td y boton e imagen
      let linea = document.createElement("tr");
      let campoNombre = document.createElement("td");
      let campoValor = document.createElement("td");
      let campoBorrar = document.createElement("td");
      let botonBorrar = document.createElement("button");
      let imagenBorrar = document.createElement("img");
      let campoEditar = document.createElement("td");
      let botonEditar = document.createElement("button");
      let imagenEditar = document.createElement("img");

      // ME QUEDO CON LOS DATOS (nombre, valor)
      campoNombre.innerHTML = dato.nombre;
      campoValor.innerHTML = dato.edad;

      // CREO EL boton BORRAR Y AÑADO UN EVENTO PARA QUE BORRE POR EL nombre
      botonBorrar.innerHTML = "Borrar";
      botonBorrar.addEventListener("click", function () {
        borrarDato(dato.nombre);
      });

      // CREO EL boton EDITAR Y AÑADO UN EVENTO PARA QUE EDITE POR EL nombre
      botonEditar.innerHTML = "Editar";
      botonEditar.addEventListener("click", function (event) {
        event.preventDefault();
        cargarDatosParaModificar(dato.nombre, dato.edad);
      });

      // CREO LA imagen de borrado
      imagenBorrar.src = "./img/delete.svg";
      imagenBorrar.width = "22";
      imagenBorrar.height = "22";
      imagenBorrar.style = "vertical-align: middle";

      // CREO LA imagen de edición
      imagenEditar.src = "./img/lapiz.png";
      imagenEditar.width = "22";
      imagenEditar.height = "22";
      imagenEditar.style = "vertical-align: middle";

      // INSERTO EN EL DOM
      linea.appendChild(campoNombre);
      linea.appendChild(campoValor);

      campoBorrar.appendChild(botonBorrar);
      campoBorrar.appendChild(imagenBorrar);
      linea.appendChild(campoBorrar);

      campoEditar.appendChild(botonEditar);
      campoEditar.appendChild(imagenEditar);
      linea.appendChild(campoEditar);

      cuerpo.appendChild(linea);
    }
  } else {
    // SI NO HAY NADA QUE MOSTRAR, NO MUESTRO NADA
    cuerpo.innerHTML = "No existen datos almacenados";
  }
}
