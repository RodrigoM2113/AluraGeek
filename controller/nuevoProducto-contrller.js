import { productServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector ("[data-form]")



formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector ("[data-url]").value;
    const nombre = document.querySelector ("[data-nombre]").value;
    const precio = document.querySelector ("[data-precio]").value;
    console.log(url,"_",nombre,"_",precio);
    
    productServices.crearProducto(url, nombre, precio)
    .then(respuesta =>{
        window.location.href = "../screens/index.html"
    }).catch(error => {
        console.log(error)
    })
    
});


