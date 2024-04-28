const btnReenviar = document.querySelector(".mensaje__boton--reenviar");
const divReenviar = document.querySelector(".mensaje__reenviar");
const btnReenviarCorreo = document.querySelector(
  ".mensaje__boton--reenviar-email"
);
const email = document.querySelector(".mensaje__reenviar-input");

btnReenviar.addEventListener("click", mostrarReenviar);
btnReenviarCorreo.addEventListener("click", reenviarCorreo);

function mostrarReenviar(e) {
  e.preventDefault();
  if (divReenviar.classList.contains("mensaje__reenviar--ocultar")) {
    divReenviar.classList.remove("mensaje__reenviar--ocultar");
    return;
  }
}

function reenviarCorreo() {
  if (!divReenviar.classList.contains("mensaje__reenviar--ocultar")) {
    if (email.value.trim(" ") === "") {
      Swal.fire({
        icon: "error",
        title: "Ingresa el correo",
        timer: 3000,
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Mensaje Reenviado",
      showConfirmButton: false,
      timer: 1500,
    });
    email.value = "";
    divReenviar.classList.add("mensaje__reenviar--ocultar");
    return;
  }
}
