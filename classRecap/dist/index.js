class Player {
  static description = "Player In Our Game";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }

  get score() {
    return this.#score;
  }
  
  set score(newScore) {
    if(newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }

  get fullname() {
    return `${this.first} ${this.last}`
  }

  setScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log("BOOYAH!")
  }
  loseLife(){
    this.numLives -= 1;
  }

}

// const player1 = new Player("blue", "steele");
// console.log(player1.fullname);
// console.log(player1.score);
// player1.score = 28;
// console.log(player1.score);

// INHERITANCE
class AdminPlayer extends Player {
  constructor(powers) {
    super();
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer("admin", "mcAdmin");
