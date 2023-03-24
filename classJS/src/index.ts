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
        private _score: number) {}

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

const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;