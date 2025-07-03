const formulario = document.getElementById('formularioRegistro');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const edad = document.getElementById('edad');

const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorEdad = document.getElementById('errorEdad');

const btnEnviar = document.getElementById('btnEnviar');

function emailValido(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

btnEnviar.addEventListener('click', () => {
    let valido = true;

    errorNombre.textContent = '';
    errorEmail.textContent = '';
    errorEdad.textContent = '';

    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
        valido = false;
    }

    if (email.value.trim() === '') {
        errorEmail.textContent = 'No ingresaste el mail.';
        valido = false;
    } else if (!emailValido(email.value.trim())) {
        errorEmail.textContent = 'El email no es válido.';
        valido = false;
    }

    const edadNumero = parseInt(edad.value);
    if (edad.value.trim() === '') {
        errorEdad.textContent = 'No ingresaste la edad.';
        valido = false;
    } else if (isNaN(edadNumero) || edadNumero <= 18) {
        errorEdad.textContent = 'Debes ser mayor de 18 años.';
        valido = false;
    }

    if (valido) {
        alert('Formulario enviado correctamente :)');
        formulario.reset();
    }
});
