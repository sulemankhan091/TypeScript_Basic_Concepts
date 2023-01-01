// a variable which can be more than one type at same time
var age = 19;
age = "20"; //ok
age = 23; //ok
var Coordinates;
Coordinates = { x: 9, y: 11 }; //ok
Coordinates = { long: 3421, lati: 10902 }; //ok
/* type narrowing in typescript  ^start^*/
function printAge(age) {
    console.log("you are ".concat(age, " years old"));
}
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace('$', '')); // remove $ sign
    }
    return price * tax;
}
// console.log(calculateTax("$45",0.6));
// console.log(calculateTax("45$",0.6)); 
// console.log(calculateTax(45,0.6));
/* type narrowing in typescript  ^end^*/
/* Union types in arrays ^Start^*/
var nums = [1, 2, 3, 4, 5, 6, 7]; // number array
var stuff = [11, "eleven", false, true, { x: 90, y: 80 }, [4, 5, 6]]; //type any array //very wiered stuff
var mixArray = [10, "11", "12", 13, false];
//array of custom union types
var coordinates = [];
coordinates.push({ long: 98769, lati: 87325 });
coordinates.push({ x: 98, y: 35 });
// console.log(coordinates);
/* Union types in arrays ^End^*/
/* Literal types in typescript ^Start^*/
var zero = 0; // it can only have value 0
var hi = 'hi'; //even HI is not allowed
var mood = 'Sad';
function checkHoliday(Weekend) {
    if (Weekend === 'Saturday' || Weekend === 'Sunday') {
        console.log("Today is holiday because of ".concat(Weekend));
    }
    else
        console.log("Today is not holiday because today is ".concat(Weekend));
}
checkHoliday('Friday');
checkHoliday('Saturday');
checkHoliday('Sunday');
/* Literal types in typescript ^End^*/ 
