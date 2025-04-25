// Capturar elementos
const formulario = document.getElementById('formularioTarea');
const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.getElementById('listaTareas');

// Evento al enviar el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene que se recargue la página

    const texto = inputTarea.value.trim();

    if (texto !== '') {
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
    }
});
