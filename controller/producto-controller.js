import { productServices } from "../servicios/productos-servicios.js";

const crearNuevoProducto = ( imageUrl, nombre, precio ) =>{
    const linea = document.createElement("div")
    const contenido =`
    <div class="producto" >
    <img class="producto__img"  src=${imageUrl} alt="Imagen de producto" >
    <h2 class="producto__titulo" >${nombre}</h2>
    <p class="price" >${precio}</p>
    <a class="link__prod" href="#" >ver producto</a>
             
    </div>
    `;

    
    linea.innerHTML =  contenido;
    return linea
}

const product = document.querySelector("[data-product]");

productServices.listaproductos().then((data) =>{
        console.log(data)
        data.forEach((producto) => {
        const nuevoProducto = crearNuevoProducto(producto.imageUrl, producto.nombre, producto.precio);
        
        product.appendChild(nuevoProducto);
        
    });
}).catch((error)=> console.log(error));

