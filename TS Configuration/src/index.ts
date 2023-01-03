/* few commands ^Start^*/

// 1---// tsc --init  /* is used to create tsconfig.json file */
// 2---// tsc -w index.ts or tsc --watch index.ts to watch a ts file for compilation
// 3---// tsc in terminal will compile all ts files in the same directory
// 4---// files option under compilerOptions in tsconfig.json will only compile mentioned files in []
// 5---// "files" and "include" options can not used together in tsconfig.json
// 6---// outDir is the path where compile javascript is stored
// 7---// target is used to specify version of javascript in which ts is compiled eg:es3, es2015 or es6


/* few commands ^End^*/

interface Chicken {
    name: string;
    breed: string;
    numEggsperWeek: number;
    age: number;
}

let fifi: Chicken = {
    name: 'fifi',
    breed: 'Austrlope',
    numEggsperWeek: 5,
    age: 0.4
}