function sqrt(num) {
    num.touppercase();
    num = "something";
    num = false;
    num();
    return num * num;
}
// function above is valid in JavaScript but in typescript it creates problem
// such as type any create problems in types 
// this is valid way to create a function
function greetPerson(person) {
    person = person.toUpperCase();
    console.log("Hello there ".concat(person, " !..."));
}
// greetPerson('Ali Hamza');
// multiple parameters function
var infoAboutPerson = function (name, age, isFunny) {
    var resultOfFunny;
    resultOfFunny = isFunny ? 'funny' : 'not funny';
    console.log("Mr/Ms ".concat(name, " of age ").concat(age, " is ").concat(resultOfFunny));
};
// infoAboutPerson("Muhammad Suleman",27,false);
// function with default parameters
var greetEidulFitar = function (person) {
    if (person === void 0) { person = "Suleman"; }
    console.log("Eid-ul-Fitar Mubarak: ".concat(person));
};
// greetEidulFitar();
// type annotations of functions return type
function square(num) {
    return num * num;
}
// console.log(square(20));
function addNumbers(x, y) {
    return x + y;
}
// console.log(addNumbers(20,20))
function squareofnums(num) {
    num * num; // void means nothing
}
// we can have two or more return types of functions which is union type in typescript
function randomNum(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
var ans = randomNum(0.3);
var result = typeof (ans);
//console.log(result);  // obviously it is string
// Good practice is to give type annotation to return type of any function
/* Anonymous function passing a function as a parameter to another function */
var colors = ['red', 'green', 'blue', 'yellow', 'teal'];
var colorsInUppercase = colors.map(function (color) {
    return color.toUpperCase();
});
// console.log(colorsInUppercase)
/* Void type */
// void type we mostly used with functions , not with variables in typescript
// we use it when we know that a function return nothing
function printTwice(msg) {
    console.log("Firstly ".concat(msg));
    console.log("Secondly ".concat(msg));
}
// printTwice('Pakistan Zindabaad');
/* never type  */
// never is different from void because void return undefined or null
// which are technically types in  typescript
//with never return  type a function does not finish execution
var neverStop = function () {
    while (true) {
        console.log('I am still executing');
    }
};
// console.log(neverStop());  
var giveError = function (msg) {
    throw new Error(msg);
};
console.log(giveError('err'));
