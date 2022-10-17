window.addEventListener("load", () => {
	const form = document.getElementById("formulario");
	const usuarioNombre = document.getElementById("usuario_nombre");
	const usuarioApellido = document.getElementById("usuario_apellido");
	const email = document.getElementById("email");
	const botonEnviar = document.getElementById("btn_enviar");

	let nombre = false;
	let apellido = false;
	let emailEscrito = false;

	form.addEventListener("submit", (e) => {
		validarCampos();
	});

	form.addEventListener("keyup", (e) => {
		validarCampos();
	});

	const validarCampos = () => {
		const usuarioNombreValor = usuarioNombre.value.trim();
		const usuarioApellidoValor = usuarioApellido.value.trim();
		const emailValor = email.value.trim();

		if (usuarioNombreValor === "") {
			validaFalla(usuarioNombre, "Campo vacio");
		} else if (usuarioNombreValor.length < 3) {
			validaFalla(usuarioNombre, "Nombre erroneo");
		} else {
			nombre = true;
			validaOk(
				usuarioNombre,
				`<i class="fa-sharp fa-solid fa-circle-check"></i> Correcto`
			);
		}

		if (usuarioApellidoValor === "") {
			validaFalla(usuarioApellido, "Campo vacio");
		} else if (usuarioApellidoValor.length < 3) {
			validaFalla(usuarioApellido, "Apellido erroneo");
		} else {
			apellido = true;
			validaOk(
				usuarioApellido,
				`<i class="fa-sharp fa-solid fa-circle-check"></i> Correcto`
			);
		}

		if (email === "") {
			validaFalla(email, "Campo vacio");
			e;
		} else if (!validaEmail(emailValor)) {
			validaFalla(email, "El email no es valido");
		} else {
			emailEscrito = true;
			validaOk(
				email,
				`<i class="fa-sharp fa-solid fa-circle-check"></i> Correcto`
			);
		}

		if (nombre != false && apellido != false && emailEscrito !== false) {
			botonEnviar.removeAttribute("disabled");
		}
	};

	const validaFalla = (input, msje) => {
		const formControl = input.parentElement;
		const aviso = formControl.querySelector("P");
		aviso.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${msje}`;

		formControl.className = "form__control falla";
	};

	const validaOk = (input, msje) => {
		const formControl = input.parentElement;
		formControl.className = "form__control ok";
		const bien = formControl.querySelector("P");
		bien.innerHTML = msje;
	};

	const validaEmail = (email) => {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	};
});
