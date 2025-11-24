// Selectores
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Evento Agregar
addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return alert('Escribe algo...');

    // Crear objeto tarea
    const li = document.createElement('li');
    li.innerText = taskText;

    // Agregar al DOM
    taskList.appendChild(li);

    // Limpiar input
    taskInput.value = '';
}