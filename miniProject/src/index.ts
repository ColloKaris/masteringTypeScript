interface Todo{
    text: string;
    completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("ul")!;


const todos: Todo[] = readTodos();
todos.forEach(createTodo)

//READ ITEMS FROM LOCAL STORAGE
function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    //TYPE NARROWING
    if(todosJSON === null) return [];
    return JSON.parse(todosJSON);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo);

    //SAVE TO LOCAL STORAGE
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = '';
})

function createTodo(todo: Todo){
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}

//Sunday did not code but tomorrow I am back at it