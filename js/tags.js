const tagsInput = document.querySelector("#interes");
const tagsDiv = document.querySelector("#tags__interes");
const formulario = document.querySelector('.formulario')
let tags = [];
tagsInput.addEventListener("keypress", guardarTag);
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
   window.location.href = "dashboard.html";
})

    function guardarTag(e) {
      if (e.keyCode === 44) {
        if (e.target.value.trim() === "" || e.target.value < 1) {
          return;
        }
        e.preventDefault();
        if (!tags.includes(e.target.value.trim()) && tags.length<6) {
          tags = [...tags, e.target.value.trim()];
          tagsInput.value = "";
          mostrarTags();
        } else {
          tagsInput.value = "";
        }
      }
    }
 function mostrarTags() {
   tagsDiv.textContent = "";
   tags.forEach((tag) => {
     const etiqueta = document.createElement("LI");
     const btnEliminar = document.createElement("I");
     etiqueta.classList.add("formulario__tag");
     btnEliminar.classList.add("fa-solid");
     btnEliminar.classList.add("fa-x");
     btnEliminar.classList.add("formulario__tag--eliminar");
     etiqueta.textContent = tag;
     btnEliminar.id = etiqueta.textContent;
     btnEliminar.title = "Eliminar Tag";
     btnEliminar.onclick = eliminarTag;
     etiqueta.appendChild(btnEliminar);
     tagsDiv.appendChild(etiqueta);
   });
 }
 function eliminarTag(e) {
   let liEliminar = document.querySelectorAll(".formulario__tag");
   liEliminar.forEach(function (li) {
     if (li.textContent === e.target.id) {
       li.remove();
       e.target.remove();
     }
   });
   tags = tags.filter((tag) => tag !== e.target.id);
 }