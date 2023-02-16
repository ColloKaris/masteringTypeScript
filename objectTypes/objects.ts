// //annotating objects
// function printName(person: {first: string, last: string }): void {
//     console.log(`${person.first} ${person.last}`);
// };

// printName({first: 'Collins', last: 'Jenkins'})

// let coordinate:{x: number; y:number} = {x: 34, y:78}

// function randomCoordinate():{x: number; y: number}{
//     return {x: Math.random(), y:Math.random()};
// }

// printName({last: "Mick", first: "Jagger"})

//DEFINING YOUR OWN TYPE ALIAS
type Point = {
    x: number;
    y: number;
};


//without using alias
//let coordinate:{x: number; y:number} = {x: 34, y:78}
//using alias
let coordinate:Point = {x: 34, y:78}

function randomCoordinate(): Point{
    return {x: Math.random(), y:Math.random()};
}

function doublePoint(point: Point): Point {
    return {x: point.x *2, y: point.y * 2}
}

type MyNum = number;
let age: MyNum = 24234;


//Type aliases with nested objects
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string
    };
}

function calculatePayout(song: Song): number{
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}


const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);