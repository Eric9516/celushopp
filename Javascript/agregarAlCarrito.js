import { productos } from "./productos.js";

const botones = document.querySelectorAll(".btn-primary");
const numeroCarrito = document.getElementById("numero");
const storage = JSON.parse(localStorage.getItem("carrito"));
const contenedor = document.getElementById("contenedor");
const eliminarTodo = document.getElementById("eliminar_todo");

let carrito = [];
let cantidad = 0;

const agregarAlCarrito = () => {
	localStorage.setItem("carrito", JSON.stringify(carrito));
};

botones.forEach((boton) => {
	boton.addEventListener("click", () => {
		const encontrar = productos.find((item) => item.nombre === boton.id);
		carrito.push(encontrar);
		agregarAlCarrito();
		cantidadCarrito();
		Toastify({
			text: "Producto agregado al carrito! 😁",
			duration: 1000,
			className: "info",
			style: {
				background: "linear-gradient(to right, #00b09b, #96c93d)",
			},
		}).showToast();
	});
});

const cantidadCarrito = () => {
	cantidad++;
	numeroCarrito.innerHTML = cantidad;
	localStorage.setItem("cantidad", cantidad);
};

if (storage) {
	window.addEventListener("load", () => {
		let cantidadCarrito = localStorage.getItem("cantidad");
		numeroCarrito.innerHTML = cantidadCarrito;
		carrito = storage;
		cantidad = carrito.length;
	});
	let arrayStorage = JSON.parse(localStorage.getItem("carrito"));
	for (let i = 0; i < arrayStorage.length; i++) {
		contenedor.innerHTML += `
		<div class="card mb-3" id="tarjetas_carrito">
				<div class="button_div">
				<button type="button" class="btn-close" aria-label="Close" name="${arrayStorage[i].id}"></button>
			</div>
			<img src="${arrayStorage[i].imagen}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${arrayStorage[i].nombre}</h5>
				<p class="card-text">Precio: $${arrayStorage[i].precio}</p>
			</div>
		</div>
	`;
	}
}

eliminarTodo.addEventListener("click", () => {
	Swal.fire({
		title: "Seguro desea vaciar el carrito?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonText: "Sí, seguro",
		cancelButtonText: "No, no quiero",
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: "Borrado!",
				icon: "success",
				text: "El carrito ha sido borrado",
			});
			setTimeout(() => {
				localStorage.clear();
				window.location.reload();
			}, 1500);
		}
	});
});
const eliminarDelCarrito = document.querySelectorAll(".mb-3");

eliminarDelCarrito.forEach((boton) => {
	boton.addEventListener("click", (e) => {
		const idElementoAEliminar = +e.target.name;
		let objetoEncontrado = storage.find(
			(item) => item.id === idElementoAEliminar
		);
		let posicion = storage.indexOf(objetoEncontrado);
		storage.splice(+posicion, 1);
		localStorage.setItem("carrito", JSON.stringify(storage));
		let actualizacion = +localStorage.getItem("cantidad");
		localStorage.setItem("cantidad", actualizacion - 1);
		window.location.reload();
	});
});

let total = JSON.parse(localStorage.getItem("carrito"));
let sumaPrecios = total.reduce((acc, item) => acc + item.precio, 0);
let costoTotal = document.getElementById("h4_costo");
costoTotal.innerHTML = `Costo total: $${sumaPrecios}`;
