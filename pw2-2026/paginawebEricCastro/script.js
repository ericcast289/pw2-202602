function mostrarMensaje(){
    alert("Bienvenido a mi portafolio web");
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Mensaje enviado correctamente");

    formulario.reset();

});