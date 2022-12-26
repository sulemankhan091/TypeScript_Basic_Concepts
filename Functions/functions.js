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
    if (isFunny == true) {
        resultOfFunny = "funny";
    }
    else {
        resultOfFunny = "not funnny";
    }
    console.log("Mr/Ms ".concat(name, " of age ").concat(age, " is ").concat(resultOfFunny));
};
infoAboutPerson("Muhammad Suleman", 27, false);
