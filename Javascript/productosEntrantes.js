fetch("./Javascript/productos.json")
	.then((res) => res.json())
	.then((json) => {
		const celulares = [...json];
		const contenedorIngresos = document.getElementById(
			"productos_entrantes_contenedor"
		);

		for (let i = 0; i < celulares.length; i++) {
			contenedorIngresos.innerHTML += `
			<li class="lista">
				${celulares[i].nombre}
			</li>
			`;
		}
	});
