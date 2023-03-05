const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("ul")!;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = '';
})

//Sunday did not code but tomorrow I am back at it