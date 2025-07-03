// Capturar elementos
const formulario = document.getElementById('formularioTarea');
const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.getElementById('listaTareas');
const btnAgregar = document.getElementById('btnAgregar');

// Evento al hacer click en el botón
btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();

    if (texto === '') {
        alert('Por favor, agrega una tarea, el campo no puede estar vacío.');
        return;
    }

    // Crear nuevo li
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = texto;

    // Evento para marcar como completado al hacer clic
    nuevaTarea.addEventListener('click', () => {
        nuevaTarea.classList.toggle('completado');
    });

    // Agregar el li a la lista
    listaTareas.appendChild(nuevaTarea); 
    // Limpiar input
    inputTarea.value = '';
});
