"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const todos = readTodos();
todos.forEach(createTodo);
//READ ITEMS FROM LOCAL STORAGE
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    //TYPE NARROWING
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    //SAVE TO LOCAL STORAGE
    saveTodos();
    input.value = '';
});
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
;
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
}
//Sunday did not code but tomorrow I am back at it
