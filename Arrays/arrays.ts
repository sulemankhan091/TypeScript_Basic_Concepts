/* Arrays in typescript ^Start^*/

//const activeUsers:[] = [];  means empty array

const activeUsers: string[] = ['Bob', 'John', 'Mike`']; // array of strings
const ageList:number[] = [24,25,28,29]; // numbers array

//another method to intialize arrays
const carNames:Array<string> = ['Suzuki Cultus','Honda Civic','Toyota Corrola'];
const randomNumbers:Array<number> = [0.18,0.29,0.34,0.45]

/* Arrays in typescript ^End^*/

/* Custom type of array  ^Start^*/

type Point = {
    x:number;
    y:number;
}

const cords: Point[] = []; // Array of type Point

cords.push({x:9,y:10});
cords.push({x:11,y:15});

// console.log(cords);

/* Custom type of array  ^End^*/

/* Multidimensional Arrays ^Start^*/

const TicTacToe : string[][] = [ 
    ['X','O','X'],
    ['O','X','O'], // two dimensional array of strings
    ['O','O','X']
]

const threeDArray: number[][][] = [[[9]],[[10]],[[11]]] // is totally valid but not used most of the time


/* Multidimensional Arrays ^End^*/