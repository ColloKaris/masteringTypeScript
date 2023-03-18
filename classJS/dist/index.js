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
}

const player1 = new Player("blue", "steele");
//console.log(player1);
//player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1)

//git add changes

const player2 = new Player("charlie", "brown");
//player2.taunt();

// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives)
console.log(player1.getScore());
player1.updateScore(28);
console.log(player1.getScore());

console.log(player1.fullName);
console.log(player1.score)
//changes to be made
//morechanges

