
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
let thing:any = "Suleman";
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

 const movies = ['Inception','Interstellar','The Shreak','The Lion King'];
 let foundMovie: string; //here implicit type any can be a problem

 for(let movie of movies) {
    if(movie ==="Inception"){
      foundMovie = "Inception";
    }
 }

 /* Type unknown in typescript */
 let value: unknown;

value = 'Hello';
value = 123;
value = {};

if (typeof value === 'string') {
  console.log(value.toUpperCase());  // OK
}

console.log(value.toUpperCase());  // Error: Object is of type 'unknown'

/*
In this example, the value variable is declared with the type unknown.
This means that it can hold any value, but we must perform some type of type 
checking before we can use it in a type-safe way.

In the first if statement, we use the typeof operator to check if the value is a string. 
If it is, we can use the toUpperCase method, which is only available on strings.

However, in the second console.log statement, we try to use the toUpperCase method on 
value without checking its type first. This results in a type error, because the type
of value is unknown, and we cannot use methods like toUpperCase on it without first 
performing some type of type assertion or type checking.

It is important to note that the unknown type is a very specific type that should only 
be used in certain situations. In most cases, it is better to use more general types like 
any or object.
*/