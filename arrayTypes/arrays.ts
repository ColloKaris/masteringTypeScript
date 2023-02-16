const activeUsers: string[] = ["colt"]
activeUsers.push("steven");

const ageList: number[] = [45, 56, 18];
ageList[0] = 99;
ageList[13];

//const bools: Array<boolean> = []
const bools: boolean[] = [];

//Point is not an object, it is an Object Type
//An Object Type describes the pattern of an object
type Point = {
    x: number,
    y: number
}

const coords: Point[] = [];
coords.push({x: 23, y: 8})

//MULTIDIMENSIONAL ARRAYS
//Two dimensional array
const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]

//Three dimensional array - stick to 2 dimensional arrays though
const demo: number[][][] = [[[1]]];