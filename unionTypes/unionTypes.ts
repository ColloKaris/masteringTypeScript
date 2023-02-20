let age: number|string = 21;
age = 23;
age = "24";

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = {x: 1, y: 34};
coordinates = {lat: 321, long: 23};

//TYPE NARROWING WITH UNION TYPES
function printAge(age: number | string): void {
    console.log(`You are are ${age} years old`); 
}

printAge(23);
printAge("87");

function calculateTax(price: number | string, tax: number){
    //return price * tax
    //price.replace("$", "")
    if(typeof price === "string"){
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}

//UNION TYPES AND ARRAYS
//const num: number[] = [1,2,3,4]
//const stuff: any[] = [1,2,3, true, "any"]

const stuff: (number | string)[] = [1, 2, 3, "das"]

const coords: (Point | Loc) [] = []
coords.push( {lat: 321, long: 23})
coords.push({x: 233, y: 234})