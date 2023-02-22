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