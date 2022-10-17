import { productos, oferta } from "./productos.js";

const contenedorEtiquetas = document.getElementById("articulos");

const mostrarProducto = () => {
	for (let i = 0; i < productos.length - 1; i++) {
		contenedorEtiquetas.innerHTML += `
        <div class="card articulo" style="width: 18rem;">
            <div class="articulo_imagen">
                <img src=${productos[i].imagen} class="card-img-top">
            </div>
            <div class="card-body">
                <h5 class="card-title">${productos[i].nombre}</h5>
                <p class="card-text">$${productos[i].precio}</p>
                <button class="btn btn-primary" id="${productos[i].nombre}">Agregar al carrito</button>
            </div>
        </div>
        `;
	}
};

mostrarProducto();

//----Oferta de la semana----

const { nombre, precio, imagen } = oferta;

const contenedorOferta = document.getElementById("contenedor_oferta");

contenedorOferta.innerHTML = `
    <div class="card articulo" style="width: 18rem;">
        <div class="articulo_imagen">
            <img src=${imagen} class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">$${precio}</p>
            <button class="btn btn-primary" id="${productos[7].nombre}">Agregar al carrito</button>
        </div>
    </div>
`;
