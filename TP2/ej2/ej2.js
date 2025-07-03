// Capturar los elementos
const inputTexto = document.getElementById('inputTexto');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

// Función para agregar un nuevo <li>
function agregarElemento() {
    const texto = inputTexto.value.trim();

    if (texto === '') {
        alert('El campo no puede estar vacío, escribí algo porfa!.');
        return;
    }

    // Crear un nuevo li
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = texto;

    // Crear botón eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'botonEliminar';

    // Agregar evento para eliminar el <li> cuando se hace clic en el botón
    botonEliminar.addEventListener('click', () => {
        lista.removeChild(nuevoLi);
    });

    // Agregar el botón al li
    nuevoLi.appendChild(botonEliminar);

    // Agregar el li a la lista
    lista.appendChild(nuevoLi);

    // Limpiar el input
    inputTexto.value = '';
}

// Evento para click en el botón
btnAgregar.addEventListener('click', agregarElemento);

// Evento para presionar "Enter" en el input
inputTexto.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        agregarElemento();
    }
});
