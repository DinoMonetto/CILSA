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

// Función para mostrar alertas de error
function showError(message) {
    alert(message);
}

// Función para validar el formulario
function validateForm(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    const form = document.getElementById('myForm');

    const nombre = form['nombre'].value;
    const apellido = form['apellido'].value;
    const telefono = form['telefono'].value;
    const email = form['email'].value;
    const fechaNacimiento = form['fecha de nacimiento'].value;
    const paisResidencia = form['pais de nacimiento'].value;

    // Validación de campos vacíos
    if (!nombre || !apellido || !telefono || !email || !fechaNacimiento || !paisResidencia) {
        showError('Todos los campos son obligatorios.');
        return false;
    }

    // Validación de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('El email no es válido.');
        return false;
    }

    // Validación de teléfono (solo números)
    const telefonoPattern = /^\d+$/;
    if (!telefonoPattern.test(telefono)) {
        showError('El número telefónico debe contener solo números.');
        return false;
    }

    form.submit(); // Enviar el formulario si todo es válido
}

// Agregar evento de validación al formulario
document.getElementById('myForm').addEventListener('submit', validateForm);
