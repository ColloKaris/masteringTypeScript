"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
input;
btn.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
