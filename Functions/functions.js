function sqrt(num) {
	num.touppercase();
	num = 'something';
	num = false;
	num();
	return num * num;
}
// function above is valid in JavaScript but in typescript it creates problem
// such as type any create problems in types
// this is valid way to create a function
function greetPerson(person) {
	person = person.toUpperCase();
	console.log('Hello there '.concat(person, ' !...'));
}
// greetPerson('Ali Hamza');
// multiple parameters function
var infoAboutPerson = function (name, age, isFunny) {
	var resultOfFunny;
	resultOfFunny = isFunny ? 'funny' : 'not funny';
	console.log('Mr/Ms '.concat(name, ' of age ').concat(age, ' is ').concat(resultOfFunny));
};
// infoAboutPerson("Muhammad Suleman",27,false);
// function with default parameters
var greetEidulFitar = function (person) {
	if (person === void 0) {
		person = 'Suleman';
	}
	console.log('Eid-ul-Fitar Mubarak: '.concat(person));
};
greetEidulFitar('Ali Hassan');
