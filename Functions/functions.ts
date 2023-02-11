function square(num: number){
    return num * num;
}

// function greet(person: string){
//     return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {
    
};

doSomething("ChickenFace", 74, false)

function greet(person: string = "Stranger"){
    return `Hi there, ${person}!`;
}
greet();
greet("Tony");