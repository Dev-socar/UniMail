window.addEventListener("DOMContentLoaded", () => {
  const btnResponder = document.querySelector(".mensaje__boton--responder");
  const btnEnviar = document.querySelector(".mensaje__boton--enviar");
  const mensaje = document.querySelector(".mensaje__respuesta-input");
  const divResponder = document.querySelector(".mensaje__respuesta");

  btnResponder.addEventListener("click", responderCorreo);
  btnEnviar.addEventListener("click", enviarCorreo);

  function responderCorreo(e) {
    e.preventDefault();
    if (divResponder.classList.contains("mensaje__respuesta--oculto")) {
      divResponder.classList.remove("mensaje__respuesta--oculto");
      return;
    }
  }

  function enviarCorreo(e) {
    if (!divResponder.classList.contains("mensaje__respuesta--oculto")) {
      if (mensaje.value.trim(" ") === "") {
        Swal.fire({
          icon: "error",
          title: "No puedes mandar un mensaje vacío",
          timer: 3000,
        });
        return;
      }
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        showConfirmButton: false,
        timer: 1500,
      });
      mensaje.value = "";
      divResponder.classList.add("mensaje__respuesta--oculto");
      return;
    }
  }
});
