// //annotating objects
// function printName(person: {first: string, last: string }): void {
//     console.log(`${person.first} ${person.last}`);
// };
//without using alias
//let coordinate:{x: number; y:number} = {x: 34, y:78}
//using alias
var coordinate = { x: 34, y: 78 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 24234;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
