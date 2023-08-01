const listaproductos = () => 
    fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearProducto = (imageUrl, nombre, precio) => {
        return fetch("http://localhost:3000/producto", {
        method:"POST",
        headers:{
            "Content-type": "application/json"
            
        },
        body: JSON.stringify({
            imageUrl,
            nombre,
            precio,
            id: uuid.v4()

           
        })

        
    });
    
};



export const productServices = {
    listaproductos, 
    crearProducto,   
}


   



