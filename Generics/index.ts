function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

interface Cat {
    name: string;
    breed: string;
}

//GENERIC FUNCTION
function identity<Type>(item: Type): Type {
    return item;
}
//
//sunday changes
//getting back to coding



identity<string>("7")

//ANOTHER GENERIC ELEMENT
function getRandomElement<T>(list: T[]): T{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

getRandomElement([true, false])

//git add productivity