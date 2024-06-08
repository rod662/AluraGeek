import { conexionapi } from "./conexionapi.js";

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("[data-lista]");

    function crearCard(id, nombre, precio, url) {
        const producto = document.createElement("li");
        producto.className = "producto";
        producto.innerHTML = `
            <div class="producto_info">
                <img src="${url}" class="producto_imagen">
                <p class="producto_nombre">${nombre}</p>
            </div>
            <div class="producto_info2">
                <p class="producto_precio">${precio} COP</p>
                <button class="boton_eliminar"><i class="bi bi-trash-fill"></i></button>
            </div>
        `;
        
        
        const botonEliminar = producto.querySelector(".boton_eliminar");
        if (botonEliminar) {
            botonEliminar.addEventListener('click', async function() {
                try {
                    await conexionapi.eliminarProducto(id);
                    producto.remove();  
                    console.log('Producto eliminado:', nombre);
                } catch (error) {
                    console.error('Error al eliminar el producto:', error);
                }
            });
        } else {
            console.error('Botón eliminar no encontrado para el producto:', nombre);
        }

        return producto;
    }

    async function listarProductos() {
        const listAPI = await conexionapi.listarProductos();
        listAPI.forEach(producto => lista.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.url)));
    }

    listarProductos();
});
