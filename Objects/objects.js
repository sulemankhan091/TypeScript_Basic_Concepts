/*
Working with object in typescript
*/
// example of an object in typescript
var dog = {
    name: 'Fafin',
    breed: 'German Shefred',
    age: 0.7 //number
};
// console.log(dog.name.toLowerCase()); // this is also valid in javascript
var printFullname = function (name) {
    var first = name.first, last = name.last;
    return "NAME: ".concat(first, " ").concat(last);
};
// console.log(printFullname({first:'Elon',last:'Musk'}));
//excess properties passing argumennt as variable
var chrisMartin = { first: 'Chris', last: 'Martin', nationality: 'English', isAlive: true };
printFullname(chrisMartin); // is ok because this function looks for first and last properties in the variable
// printFullname({first:'Chris', last:'Martin',nationality:'English',isAlive:true}) error 
/* Object as a type to a variable */
var coordinate = { x: 45, y: 90 };
// object as return type of a function
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doubleCoordinates(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function checkRetiredPerson(person) {
    if (person.isAlive == true) {
        if (person.age > 55 && person.isGovtEmployee == true) {
            return "".concat(person.name, " is a former Government employee and he is alive so he deserved pension because his age is ").concat(person.age, " and he is retired");
        }
        else if (person.age < 55 && person.isGovtEmployee == true) {
            return "".concat(person.name, " is a currently Government employee and his age is ").concat(person.age, " which is less than retirement age \n        so he can't get pension");
        }
    }
    else if (person.isAlive == false) {
        return "".concat(person.name, " has died so he can't get pension");
    }
    return "".concat(person.name, " is not a former Government employee because He did ").concat(person.isGovtEmployee ? '' : 'not', " work in any government department");
}
var Ali_Raza;
Ali_Raza = {
    name: 'Ali Raza Sikander',
    age: 36,
    isGovtEmployee: false,
    isAlive: true
};
var Ilyas_Hassan;
Ilyas_Hassan = {
    name: 'Muhammad Ilyas',
    age: 22,
    isGovtEmployee: true,
    isAlive: true
};
var ali_status = checkRetiredPerson(Ali_Raza);
var ilyas_status = checkRetiredPerson(Ilyas_Hassan);
function calculatePayout(song) {
    var chargePerStream = 0.33;
    var numStreams = song.numStreams;
    return numStreams * chargePerStream; // numStreams * 0.33
}
function printSong(song) {
    console.log("".concat(song.title, "-").concat(song.artist));
}
var track = {
    title: "Adventure of a lifetime",
    artist: "Coldplay",
    numStreams: 980000890,
    credits: {
        producer: 'David Smith',
        writer: 'Mark Poll',
        singer: 'Chris Martin'
    }
};
var revenue = calculatePayout(track);
var point1 = { x: 9, y: 8, z: 3 }; // is valid point
var point2 = { x: 79, y: 80 }; // is also valid point
var payoneerUser = {
    id: '0980707070',
    name: 'John Smegast',
    gender: 'male'
};
var circle1 = {
    radius: 9,
    diameter: 18,
    fill: 'grey',
    stroke: 'red'
};
var thomas = {
    numLives: 7,
    breed: 'cat',
    age: 5
};
console.log(typeof (thomas));
/* Intersection types ^End^*/ 
