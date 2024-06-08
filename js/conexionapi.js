async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, url) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            url:url
        })
    })
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const respuesta = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });
    if (!respuesta.ok) {
        throw new Error("Hubo un error al eliminar el producto");
    }
}


export const conexionapi =  {
    listarProductos, enviarProducto, eliminarProducto
}