// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl);
// inputEl.value = "hacked";

 const btn = document.querySelector<HTMLButtonElement>(".btn")!;

interface Cat {
    name: string,
    breed: string
}

function numberIdentity(item: number): number {
    return item;
}

function identity<Type>(item: Type): Type {
    return item;
}

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(['a', 'b', 'c', 'd']))

getRandomElement([true, false, true, false, false])

function merge<T, U>(object1:T, object2:U): T & U {
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({name: "colt"}, {pets: ["blue", "elton"]})

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

function makeEmptyArray<T = number>(): T[]{
    return []
}


interface Song {
    title: string;
    artist: string;
}


interface Video {
    title: string;
    creator: string;
    resolution: string;
}


class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el)
    }
}