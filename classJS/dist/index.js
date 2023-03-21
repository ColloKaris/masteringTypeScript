class Player {
    #score = 0; //makes it a private field
    #numLives = 10;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    taunt(){
        console.log("BOOYAH!")
    }
    loseLife(){
        this.#numLives -= 1;
    }
    getScore(){
        return this.#score;
    }
    updateScore(newScore){
        this.#score = newScore;
    }

    //Getter
    get fullName(){
        return `${this.first} ${this.last}`
    }

    get score(){
        return this.#score;
    }
    
    //Setter
    set score(newScore){
        if (newScore < 0) {
            throw new Error("Score must be positive!");
        }
        this.#score = newScore
    }
    set fullName(newName){
        newName.split("");
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }
}

const player1 = new Player("blue", "steele");
//console.log(player1);
//player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1)

//git add changes

//const player2 = new Player("charlie", "brown");
//player2.taunt();

// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives)
//console.log(player1.getScore());
//player1.updateScore(28);
//console.log(player1.getScore());

//Testing getters, which are then used like properties
//and not the methods that they are
// console.log(player1.fullName);
// console.log(player1.score)

//Testing setters
// player1.score = 133
// console.log(player1.score)

console.log(player1.fullName);
player1.fullName = "Amy Adams";
console.log(player1.fullName);


