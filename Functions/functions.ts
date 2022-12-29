function sqrt(num){
    num.touppercase();
    num="something";
    num=false;
    num();
    return num * num;
}

// function above is valid in JavaScript but in typescript it creates problem
// such as type any create problems in types 


// this is valid way to create a function
function greetPerson(person:string){
    person = person.toUpperCase();
    console.log(`Hello there ${person} !...`);
}
// greetPerson('Ali Hamza');

// multiple parameters function
const infoAboutPerson = (name:string,age:number,isFunny:boolean) => {
    let resultOfFunny:String;  
    resultOfFunny = isFunny ? 'funny' : 'not funny';
   
    console.log(`Mr/Ms ${name} of age ${age} is ${resultOfFunny}`);
}

// infoAboutPerson("Muhammad Suleman",27,false);

// function with default parameters

const greetEidulFitar = (person:string = "Suleman")=>{
    console.log(`Eid-ul-Fitar Mubarak: ${person}`);
}

// greetEidulFitar();

// type annotations of functions return type

function square(num:number){  // here square knows number is return type
    return num*num;
}
// console.log(square(20));

function addNumbers(x:number, y:number):number{
    return x + y;
}

// console.log(addNumbers(20,20))

function squareofnums(num:number){  // when we dont use return keyword then default return type is void
    num*num;                        // void means nothing
}

// we can have two or more return types of functions which is union type in typescript

function randomNum(num:number){  //here typescript is smart enough to decide what return type coulld be
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}
let ans = randomNum(0.3);
let result = typeof(ans);
//console.log(result);  // obviously it is string

// Good practice is to give type annotation to return type of any function

/* Anonymous function passing a function as a parameter to another function */

const colors = ['red', 'green', 'blue', 'yellow', 'teal'];

const colorsInUppercase = colors.map(color => {  // here typescript picks type of parameter from array on which map function is applied
    return color.toUpperCase();
})
// console.log(colorsInUppercase)

/* Void type */
// void type we mostly used with functions , not with variables in typescript
// we use it when we know that a function return nothing

function printTwice(msg: string):void{  // if we don't use void here then typescript automatically knows it is void
    console.log(`Firstly ${msg}`);
    console.log(`Secondly ${msg}`);
}

// printTwice('Pakistan Zindabaad');

/* never type  */
// never is different from void because void return undefined or null
// which are technically types in  typescript

//with never return  type a function does not finish execution

const neverStop = ():never =>{
    while (true) {
        console.log('I am still executing')
    }
}
// console.log(neverStop());   // it continously runs

const giveError = (msg:string):never =>{
    throw new Error(msg);
}
// console.log(giveError('err'));