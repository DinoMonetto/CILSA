// Función para cambiar el estilo del formulario y del fondo
function setStyle(styleName) {
    const formContainer = document.getElementById('form-container'); // Obtener el contenedor del formulario por su ID
    const body = document.body; // Obtener el cuerpo del documento

    // Limpiar clases previas
    body.className = '';
    formContainer.className = 'form-container';

    // Agregar la nueva clase de estilo
    if (styleName) {
        body.classList.add(styleName);
        formContainer.classList.add(styleName);
    }
}

// Agregar eventos a los botones de estilo
document.getElementById('estilo1').addEventListener('click', () => setStyle(''));
document.getElementById('alto-contraste').addEventListener('click', () => setStyle('dark-mode'));
document.getElementById('violeta').addEventListener('click', () => setStyle('violet-mode'));
