let movieTitle: string = "Amadeus";
movieTitle = "Arrival";

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;


//Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The other two";
//tvShow = false;

let isFunny = false;
isFunny = true;
//isFunny = "asd";

// the any type
// let thing: any = "hello";
// thing = 1;
// thing = false;
// thing()
// thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
