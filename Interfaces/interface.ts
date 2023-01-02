// interfaces almost serve the exact same purpose as type alias in typescript

interface Person{
    name: string;
    age: number;
}

function sayHappyBirthday(person:Person){
    return (`Hello ${person.name} happy birthday on turning ${person.age}`);
}

let msg = sayHappyBirthday({name:'Muhammad Suleman',age:28});
// console.log(msg);

// interfaces use only with objects

interface Point {
    x: number;
    y: number;
}

let pt1: Point = {
    x: 60,
    y: 120
}

// readonly and optional properties in interfaces

interface Employee {
    readonly id: number;
    firstName: string;
    lastName: string;
    nickName?: string; // optional
    sayHi?: () =>  string;
}

let bankEmployee: Employee = { id: 9799, firstName: "John", lastName: "Doe", nickName: "johnny" };
let hotelEmployee: Employee = { id: 4554, firstName: "Alex", lastName: "Monich", sayHi: () => { return 'Hi' } }; // also ok

// another example 
interface Product {
    name: string;
    price: number;
    calcDiscount(discount:number):  number;
}

let shoes: Product = {
    name: 'Black Nike Shoes',
    price: 90,
    calcDiscount(disc: number) {
        const newPrice = this.price * (1 - disc);
        this.price = newPrice;
        return this.price;
    }
}

let ans = shoes.calcDiscount(0.3);
console.log(ans);


// reopening an interface

interface Dog {
    name: string;
    age: number;
}

interface Dog { 
    breed: string;
    bark:()=>string;
}

const Ellton: Dog = {
    name: 'Ellton',
    age: 0.5,
    breed: 'Husky',
    bark: () => "Woo Woo"
}

//extending a interface

interface ServiceDog extends Dog { 
    job: 'Drug Sniffer' | 'Bomb Detector' | 'Guide Dog'
}

let chewey: ServiceDog = {
    name: 'Chewey',
    age: 2.5,
    breed: 'LaborDog',
    bark: () => { return "Bark" },
    job: "Guide Dog"
}

// one interface can inherit from more than one interfaces
//Example

interface Citizen {
    name: string;
    ssn: number;
}

interface JobRole {
    level: string;
    langauges: string[];
}

interface Engineer extends Citizen, JobRole { 
    readonly id: number;
}

let tony: Engineer = {
    name: 'Tony Anderson',
    ssn: 646564,
    level: 'junior',
    langauges: ['TS', 'JS', 'Python'],
    id:9897
}

//Different between type and interface in typescript
//type alias can use with single variable and objects
type Color = 'red' | 'blue'

//While interface is only use with objects

//we can extend or reopen a interface but not the type alias

interface Chicken{
    breed:string;
}
interface Chicken {
    numEggs: number;
}

////////////////////

// with type we can use & to intersection more than one type alias

//with interface we use extends to inherit from another interface