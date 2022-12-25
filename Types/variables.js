/** Type String **/
/*
let myName:string = "Muhammad Suleman";
myName = "Ali";
myName = myName.toUpperCase();
myName = 12; error type number is not assignable to type string
console.log(myName);
*/
function printIdNumber(num) {
    if (typeof (num) === 'number') {
        return ("Id Number is ".concat(num, " is number"));
    }
    if (typeof (num) === 'string') {
        return ("Id Number is ".concat(num, " is string"));
    }
    else {
        return ("Id Number is ".concat(num, " is boolean"));
    }
}
console.log(printIdNumber(1234112));
console.log(printIdNumber(false));
console.log(printIdNumber('34201-4254197-3'));
