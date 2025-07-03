// Capturar elementos
const parrafos = document.querySelectorAll('.parrafo');
const btnResaltar = document.getElementById('btnResaltar');
const btnOcultar = document.getElementById('btnOcultar');

// Evento para resaltar párrafos
btnResaltar.addEventListener('click', () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.add('resaltado');
    });
});

// Evento para ocultar/mostrar párrafos
btnOcultar.addEventListener('click', () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('oculto');
    });
});
