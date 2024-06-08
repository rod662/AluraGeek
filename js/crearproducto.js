import { conexionapi } from "./conexionapi.js";

const formulario = document.querySelector("[data-formulario]");


async function crearProducto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;

   await conexionapi.enviarProducto(nombre, precio, url);
   

   
}



formulario.addEventListener("submit", evento =>crearProducto(evento))