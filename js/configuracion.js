const btnConfiguracion = document.querySelector(".header__icono-configuracion");
const divConfiguracion = document.querySelector(".configuracion");
const btnGuardar = document.querySelector(".formulario__boton-guardar");
const btnCancelar = document.querySelector(".formulario__boton-cancelar");

btnConfiguracion.addEventListener("click", mostrarDiv);
btnCancelar.addEventListener("click", ocultarDiv);
btnGuardar.addEventListener("click", guardarCambios);

function mostrarDiv() {
  if (divConfiguracion.classList.contains("configuracion--ocultar")) {
    divConfiguracion.classList.remove("configuracion--ocultar");
    return;
  }
}

function ocultarDiv() {
  if (!divConfiguracion.classList.contains("configuracion--ocultar")) {
    divConfiguracion.classList.add("configuracion--ocultar");
    return;
  }
}

function guardarCambios(e) {
  e.preventDefault();
  Swal.fire({
    icon: "success",
    title: "Cambios Guardados Correctamente",
    showConfirmButton: false,
    timer: 1500,
  });
  divConfiguracion.classList.add("configuracion--ocultar");
}
