// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl);
// inputEl.value = "hacked";
function numberIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c', 'd']));
