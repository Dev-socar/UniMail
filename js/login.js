const inputEmail = document.querySelector('#formulario input[type="email"]');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');
const formulario = document.querySelector("#formulario");
inputEmail.addEventListener("blur", validar);
formulario.addEventListener("submit", iniciarSesion);

function iniciarSesion(e) {
    e.preventDefault()
  window.location.href = "preguntas.html";
}

function validar(e) {
  const input = e.target;
  if (input.value.trim(" ") === "") {
    if (!btnSubmit.classList.contains("formulario__boton--disabled")) {
      btnSubmit.classList.add("formulario__boton--disabled");
    }
    input.classList.add("formulario__input--error");
    mostrarAlerta(`El campo ${input.id} no debe ir vacío`, input);
    return;
  }
  if (input.id === "correo" && !validarEmail(input.value)) {
    if (!btnSubmit.classList.contains("formulario__boton--disabled")) {
      btnSubmit.classList.add("formulario__boton--disabled");
    }
    input.classList.add("formulario__input--error");
    mostrarAlerta(
      "El correo debe ser de la forma a12345678@alumnos.uady.mx",
      input
    );
    return;
  }
  btnSubmit.disabled = false;
  btnSubmit.classList.remove("formulario__boton--disabled");
  input.classList.remove("formulario__input--error");
  limpiarAlerta(input.parentElement);
}

function mostrarAlerta(mensaje, elemento) {
  limpiarAlerta(elemento.parentElement);
  const spanMensaje = document.createElement("span");
  spanMensaje.classList.add(
    "formulario__mensaje",
    `formulario__mensaje--error`
  );
  spanMensaje.innerText = mensaje;
  elemento.parentNode.appendChild(spanMensaje);
}
function limpiarAlerta(elemento) {
  const alerta = elemento.querySelector(".formulario__mensaje--error");
  if (alerta) {
    alerta.remove();
  }
}
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@alumnos\.uady\.mx$/;
  const res = regex.test(email);
  return res;
}
