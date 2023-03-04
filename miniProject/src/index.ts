const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted")
})