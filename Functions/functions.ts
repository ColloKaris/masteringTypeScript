function square(num: number): number{
    return num * num;
}

// function greet(person: string){
//     return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {
    
};

doSomething("ChickenFace", 74, false)

function greet(person: string = "Stranger"): string {
    return `Hi there, ${person}!`;
}
greet();
greet("Tony");

const add = (x: number, y: number): number => {
    return x + y;
}

//a function can return more than one type
function rando(num: number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}