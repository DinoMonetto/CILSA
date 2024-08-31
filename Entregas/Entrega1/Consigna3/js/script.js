// Función para cambiar el estilo del formulario y del fondo
function setStyle(styleName) {
    const formContainer = document.getElementById('form-container');
    const body = document.body;

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
    event.preventDefault(); // Prevenir el envío del formulario por defecto (corrección)
    const form = document.getElementById('myForm');

    const nombre = form['nombre'].value.trim();
    const apellido = form['apellido'].value.trim();
    const telefono = form['telefono'].value.trim();
    const email = form['email'].value.trim();
    const fechaNacimiento = form['fecha de nacimiento'].value.trim();
    const paisResidencia = form['pais de nacimiento'].value.trim();

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

    form.submit(); // Envia el formulario si todo es válido
}

// Función para deshabilitar el botón de envío si hay campos vacíos
function toggleSubmitButton() {
    const form = document.getElementById('myForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll('input[required]');
    
    let allFilled = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    submitButton.disabled = !allFilled;
}

// Agrega evento de validación al formulario
document.getElementById('myForm').addEventListener('submit', validateForm);

// Agrega eventos de entrada para validar si los campos están llenos y habilitar/deshabilitar el botón de envío
document.querySelectorAll('#myForm input[required]').forEach(input => {
    input.addEventListener('input', toggleSubmitButton);
});

// Inicializa el estado del botón de envío al cargar la página
toggleSubmitButton();
