
let productos = [];
function crearProducto(nombre, descripcion, precio) {

  const producto = {
    nombre: this.nombre,
    descripcion: this.descripcion,
    precio: this.precio
  }
  productos.push(producto);
  localStorage.setItem('productos', JSON.stringify(productos));
  return producto;
}


function listarProducto() {

  if (localStorage.getItem('productos')) {
    return JSON.parse(localStorage.getItem('productos'));
  } else {
    // for (let index = 0; index < productos.length; index++) {
    //   const element = productos[index];
    // }
    return productos;
  }
}