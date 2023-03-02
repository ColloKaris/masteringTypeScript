const btn = document.getElementById("btn")!;

btn.addEventListener("click", function() {
    alert("CLICKED!!");
});

//TYPE ASSERTIONS
let mystery: unknown = "Hello World!!!";

const numChars = (mystery as string).length

