"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const todos = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = '';
});
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
//Sunday did not code but tomorrow I am back at it
