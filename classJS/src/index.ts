// class Player {
//     public readonly first: string;
//     public readonly last: string;
//     private score: number = 0;
//     constructor(first: string,last: string) {
//         this.first = first;
//         this.last = last;
//     }

//     private secretMethod(): void {
//         console.log("SECRET METHOD!")
//     }
// }


class Player {
    // public readonly first: string;
    // public readonly last: string;
   // private score: number = 0;
    constructor(
        public first: string,
        public last: string,
        protected _score: number) {}

    private secretMethod(): void {
        console.log("SECRET METHOD!")
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if(newScore < 0){
            throw new Error ("Score cannot be negative!")
        }
        this._score = newScore;
    }

}

//To show protected modifier
class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore(){
        this._score = 999999999;
    }
}

const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;


//INTERFACES AND CLASSES
interface Colorful {
    color: string;
}

interface Printable {
    print() : void;
}

class Bike implements Colorful {
    constructor (public color: string){

    }
}

class Jacket implements Colorful, Printable{
    constructor(public brand: string, public color: string){

    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`)
    }
}

const bike1 = new Bike("red")

const jacket1 = new Jacket("Prada", "black");

//Abstract classes
abstract class Employee{
    constructor(public first: string, public last: string){}
    //Define methods that must exist in subclasses
    abstract getPay(): number;
    greet(){
        console.log("Hello!!!")
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number){
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number,
        private hoursworked: number){
            super(first, last);
        }
    getPay(): number {
        return this.hourlyRate * this.hoursworked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());