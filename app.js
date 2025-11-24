// Selectores
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Al inicio del archivo
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return alert('Escribe algo...');

    saveLocalTasks(taskText); // <--- NUEVO: Guardar

    const li = document.createElement('li');
    li.innerText = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
}

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

    const deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'X';
   deleteBtn.classList.add('delete-btn');
   li.appendChild(deleteBtn);
   
}



// NUEVAS FUNCIONES
function saveLocalTasks(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    const deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'X';
   deleteBtn.classList.add('delete-btn');
   li.appendChild(deleteBtn);
}

function loadTasks() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        const li = document.createElement('li');
        li.innerText = todo;
        taskList.appendChild(li);
    });

    const deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'X';
   deleteBtn.classList.add('delete-btn');
   li.appendChild(deleteBtn);
}

// 1. Modificar loadTasks y addTask para que agreguen el boton borrar
// En ambas funciones, justo despues de crear el 'li', agrega esto:
/* const deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'X';
   deleteBtn.classList.add('delete-btn');
   li.appendChild(deleteBtn);
*/

// 2. Agregar evento a la lista
taskList.addEventListener('click', removeTask);

// 3. Nueva funcion borrar
function removeTask(e) {
    const item = e.target;
    // Verificar si clickeo el boton borrar
    if (item.classList.contains('delete-btn')) {
        const todo = item.parentElement;
        todo.remove();
        removeLocalTodos(todo);
    }
}

// 4. Borrar de LocalStorage
function removeLocalTodos(todoDiv) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // Logica simple para borrar texto coincidente
    const taskIndex = todoDiv.innerText.replace('X', '');
    todos.splice(todos.indexOf(taskIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}