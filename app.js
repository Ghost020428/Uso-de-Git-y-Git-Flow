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
}