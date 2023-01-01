// a variable which can be more than one type at same time

let age: number | string = 19;
age = "20" //ok
age = 23 //ok
// console.log(age) 23 is output

// we can also give union type to custom types

type Point = {
    x:number;
    y:number;
}
type Loc = {
    long:number;
    lati:number;
}

let Coordinates: Point | Loc ;
Coordinates = {x:9,y:11} //ok
Coordinates = {long:3421,lati:10902} //ok

/* type narrowing in typescript  ^start^*/

function printAge(age: number | string):void{
    console.log(`you are ${age} years old`);
}

function calculateTax(price:number|string , tax:number) {
    if (typeof price === "string"){
        price = parseFloat(price.replace('$','')); // remove $ sign
    } 
        return price * tax;
}

// console.log(calculateTax("$45",0.6));
// console.log(calculateTax("45$",0.6)); 
// console.log(calculateTax(45,0.6));

/* type narrowing in typescript  ^end^*/

/* Union types in arrays ^Start^*/

const nums:number[] = [1,2,3,4,5,6,7]; // number array
const stuff:any[] = [11,"eleven",false,true,{x:90,y:80},[4,5,6]]; //type any array //very wiered stuff

const mixArray: (number | string | boolean)[] = [10,"11","12",13,false];

//array of custom union types
let coordinates : (Point | Loc)[] = [];
coordinates.push({long:98769,lati:87325});
coordinates.push({x:98,y:35});
// console.log(coordinates);
/* Union types in arrays ^End^*/


/* Literal types in typescript ^Start^*/

const zero:0 = 0; // it can only have value 0
const hi:'hi' = 'hi'; //even HI is not allowed

let mood: 'Happy' | 'Sad' = 'Sad';

function checkHoliday(Weekend: 'Friday'|'Saturday'|'Sunday'):void{
    if(Weekend === 'Saturday' || Weekend === 'Sunday'){
        console.log(`Today is holiday because of ${Weekend}`);
    } else 
    console.log(`Today is not holiday because today is ${Weekend}`);
}
checkHoliday('Friday');
checkHoliday('Saturday');
checkHoliday('Sunday');
/* Literal types in typescript ^End^*/