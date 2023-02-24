interface Point {
    x: number;
    y: number;
}


const pt: Point = {x: 123, y: 1234}

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    //sayHi:  () => string;
    sayHi(): string;
}

const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    id: 1234,
    nickname: "Tom",
    sayHi: () => {
        return "Hello!";
    }
};

thomas.first = "Tommy"

interface Product{
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        return 2
    }
}

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "Woof Woof";
    }
}

//EXTENDING INTERFACES
interface ServiceDog extends Dog {
     job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark(){
        return "bark";
    },
    job: "guide dog"
}

//INTERFACE MULTIPLE INHERITANCE
interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const peirre: Engineer = {
    name: "Pierre",
    id: 12345,
    email: "pier@gmail.com",
    level: "Senior",
    languages: ["JS", "Python"]
}

//crazy shit didn't code, I was down bad
//second day wih changes