// Cambiar el texto del título usando getElementById
const titulo = document.getElementById('tituloPrincipal');
titulo.textContent = 'Nuevo Título Modificado';

// Cambiar el color de los párrafos usando getElementsByClassName
const parrafos = document.getElementsByClassName('parrafo');
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = 'red';
}

// Agregar " (texto agregado)" al final de cada <li> usando querySelectorAll
const elementosLi = document.querySelectorAll('#contenedor li');
elementosLi.forEach(li => {
    li.textContent += ' (texto agregado)';
});

