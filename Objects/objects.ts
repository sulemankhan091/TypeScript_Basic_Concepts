/* 
Working with object in typescript
*/
// example of an object in typescript
const dog = {
    name : 'Fafin',  //string
    breed: 'German Shefred', //string
    age: 0.7 //number
}
// console.log(dog.name.toLowerCase()); // this is also valid in javascript

const printFullname = (name: {first:string , last:string}) => {
    const {first, last} = name;
    return `NAME: ${first} ${last}`;
}
// console.log(printFullname({first:'Elon',last:'Musk'}));

//excess properties passing argumennt as variable
const chrisMartin = {first:'Chris', last:'Martin',nationality:'English',isAlive:true};
printFullname(chrisMartin); // is ok because this function looks for first and last properties in the variable
// printFullname({first:'Chris', last:'Martin',nationality:'English',isAlive:true}) error 

/* Object as a type to a variable */

let coordinate:{x:number,y:number} = {x:45,y:90};

// object as return type of a function

function randomCoordinate():{x:number,y:number} {
    return {x:Math.random(),y:Math.random()}
}
//console.log(randomCoordinate()); //output { x: 0.23511248955068953, y: 0.2421488407136807 }

/* type Alias in typescript
It is very helpful to use with objects
*/

//example
type Point = { x: number; y: number;}

function doubleCoordinates(point:Point):Point {
    return {x:point.x*2, y:point.y*2} ;
}
//console.log(doubleCoordinates({x:2.3,y:8.9})); // output { x: 4.6, y: 17.8 }

// example of type alias 
type RetiredPerson = {
    name:string;
    age:number;
    isGovtEmployee:boolean;
    isAlive:boolean;
};

function checkRetiredPerson(person:RetiredPerson):string {
    if(person.isAlive == true){
        if(person.age>55 && person.isGovtEmployee == true) {
            return `${person.name} is a former Government employee and he is alive so he deserved pension because his age is ${person.age} and he is retired`;
    }
    
    else if (person.age<55 && person.isGovtEmployee == true)  {
        return `${person.name} is a currently Government employee and his age is ${person.age} which is less than retirement age 
        so he can't get pension`;
    }
        
    } else if (person.isAlive == false) {
        return `${person.name} has died so he can't get pension`;
    }
    return `${person.name} is not a former Government employee because He did ${person.isGovtEmployee? '':'not'} work in any government department`
}

let Ali_Raza:RetiredPerson;
Ali_Raza = {
    name: 'Ali Raza Sikander',
    age: 36,
    isGovtEmployee: false,
    isAlive:true
}

let Ilyas_Hassan:RetiredPerson;
Ilyas_Hassan={
     name: 'Muhammad Ilyas',
    age: 22,
    isGovtEmployee: true,
    isAlive: true
}

let ali_status = checkRetiredPerson(Ali_Raza);
let ilyas_status = checkRetiredPerson(Ilyas_Hassan);

// console.log(ali_status );
// console.log(ilyas_status );

// Nested objects in typescript

// spotify example
type Song = { 
title: string;
artist: string;
numStreams: number;
credits:{
    producer: string;
    writer: string;
    singer: string;
}}

function calculatePayout(song:Song):number{
        let chargePerStream = 0.33;
        let {numStreams} = song;
        return numStreams * chargePerStream; // numStreams * 0.33
}

function printSong(song:Song):void{
    console.log(`${song.title}-${song.artist}`);
}

const track:Song = {
    title: "Adventure of a lifetime",
    artist:"Coldplay",
    numStreams: 980000890,
    credits:{
        producer:'David Smith',
        writer:'Mark Poll',
        singer:'Chris Martin'
    }

}

const revenue = calculatePayout(track);
// console.log(`Total revenue ${revenue}$`);
// printSong(track);

/* Optional properties in objects ^Start^ */
// with ? sign we can make an optional property in object

type PointInSquare = {
    x: number;
    y: number;
    z?: number; // optional
}

let point1: PointInSquare = {x:9,y:8,z:3} // is valid point
let point2: PointInSquare = {x:79,y:80} // is also valid point


/* Optional properties in objects ^End^ */

/* Modifier readonly ^Start^ */
// readonly propertie can not be modified.

type User = {
    readonly id: string;  // readonly keyword used before the property name
    name: string;
    gender?: string;
}

const payoneerUser: User = {
    id:'0980707070',
    name: 'John Smegast',
    gender: 'male'
}
//payoneerUser.id = '909090' // error message cannot assign to readonly property

/* Modifier readonly ^End^ */

/* Intersection types ^Start^*/

// Multiple types combined with &

 type Circle = {
    radius:number;
    diameter:number;
 }

 type Colorfull = {
    fill:string;
    stroke:string;
 }

 type ColorfullCircle = Circle & Colorfull;

 let circle1:ColorfullCircle = {
    radius:9,
    diameter:18,
    fill:'grey',
    stroke:'red'
 }

//  CatDog example

type Cat = {
    numLives:number;
}

type Dog = {
    breed:string;
}

type CatDog = Cat & Dog & {
    age:number;
}

let thomas: CatDog = {
    numLives: 7,
    breed: 'British Shorthair',
    age:5
}
console.log(typeof(thomas));
/* Intersection types ^End^*/