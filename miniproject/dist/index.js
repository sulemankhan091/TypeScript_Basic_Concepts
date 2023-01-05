"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById('todoinput');
// (<HTMLInputElement>input).value is another method but not common in React jsx
const form = document.querySelector('form'); // no need of => as HTMLFormElement;
const list = document.getElementById('todolist');
const todos = readTodos();
todos.forEach(createTodo);
function createTodo(todo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.appendChild(checkbox);
    list.append(newLi);
    input.value = "";
}
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
form.addEventListener('submit', handleSubmit);
