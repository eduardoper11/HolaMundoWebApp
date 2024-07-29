console.log("Hola Mundo!");
// Función que muestra el mensaje emergente
function mostrarMensaje() {
    alert('¡Hola Mundo (Pero dentro del botón)!');
}

// Asignar la función al botón cuando se carga la página
document.getElementById('miBoton').addEventListener('click', mostrarMensaje);
