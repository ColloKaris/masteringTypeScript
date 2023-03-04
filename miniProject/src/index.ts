const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
input

btn.addEventListener("click", function() {
    alert(input.value);
    input.value = "";
});


