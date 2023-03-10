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

const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
    return color.toUpperCase();
})

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}

//NEVER
function makeError(msg: string): never{
    throw new Error(msg);
}
function gameloop(): never{
    while(true){
        console.log("GAME LOOP RUNNING")
    }
}

//EXERCISE 1
function twoFer(name: string = "you"): string {
    return `one for ${name}, one for me`
}
console.log(twoFer());
console.log(twoFer("Elvis"))

//EXERCISE 2
function isLeapYear(year: number): boolean {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return true;
    }
    return false;
}