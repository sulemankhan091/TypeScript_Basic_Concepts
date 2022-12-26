/** Type String **/
/*
let myName:string = "Muhammad Suleman";
myName = "Ali";
myName = myName.toUpperCase();
myName = 12; error type number is not assignable to type string
console.log(myName);
*/
/** Type Number **/
/*
let catsInHome: number = 9;
catsInHome = catsInHome + 1;
console.log(catsInHome);
*/
/** Type Bolean **/
/*
let isHired: boolean = false;
isHired = true;
console.log(isHired);
*/
// let name: string = "John Doe";
/*
function addNumbers(x: number, y: number): number {
  return x + y;
}

console.log(addNumbers(9,12));
*/
/** Type inference **/
/*
let tvShow = "Jimmy Fallon Show"
tvShow = "jimmy Kimmel Show";
// tvShow = 9 // error type number is not assignable to type string
*/
// union type in typescript
/*
type Name = string | number;

function getFullName(name: Name): string {
  if (typeof name === "string") {
    return name;
  } else {
    return `Name: ${name}`;
  }
}

let nameofPerson = getFullName(2732);
console.log(nameofPerson);


type idNumber = number |string | boolean ;

function printIdNumber(num:idNumber):string {
  if (typeof(num) === 'number') {
    return(`Id Number is ${num} is number`);
  }
  if(typeof(num) === 'string') {
    return(`Id Number is ${num} is string`);
  }
  else{
    return(`Id Number is ${num} is boolean`);
  }
}

console.log(printIdNumber(1234112));
console.log(printIdNumber(false));
console.log(printIdNumber('3XXX1-XXXXXX-X'));
*/
// let name:string = "Ali"; is called explicit type interference
// let name = "Ali"; is called implicit type interference
// any type in typescript
// we can do anything to type any in typescript. check example code below
var thing = "Suleman";
thing = 12;
thing = false;
thing = [];
thing.toNormalize();
/*
let something:string = "I am Something";
something.toUpperCase();  // this is valid
something.IamnotExisted(); // this is not valid because it is not declaered
*/
// Delayed Initialization & Implicit Any 
var movies = ['Inception', 'Interstellar', 'The Shreak', 'The Lion King'];
var foundMovie; //here implicit type any can be a problem
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Inception") {
        foundMovie = "Inception";
    }
}
