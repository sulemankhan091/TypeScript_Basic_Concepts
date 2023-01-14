var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*Generics Notes <#START#>*/
/*

1.  Generics allow us to define reusable functions and classes that work with
    multiple types instead of single type.
2.  Many Default Generics are predefined in typescript to use with DOM.
3.  Generics can inferr types from given arguments. weather it is <string> or <number>
4.  In DOM we have to give type in <> brackets for example <HTMLInputElement>
5.  in tsx we have to use <T,> to seprate it from html tags for generics
6.  instead of primitive types we can use type alias and interface in generics
*/
/*Generics Notes <#END#>*/
var input = document.querySelector('#username'); // ! for I am sure and
var btn = document.querySelector('.btn');
// btn.textContent = "Log out";
// console.log(btn.textContent)
// input.value = "Suleman Khan";
// console.dir(input);
//user defined generics
// for example we need a function of identity with different types of parameters
// function numberIdentity(item: number):number {
//     return item;
// }
// function stringIdentity(item: string):string {
//     return item;
// }
// function booleanIdentity(item: boolean):boolean {
//     return item;
// }
// any is not a solution for this problem
// function identity(item: any): any {
//     return item;
// }
//basic Example of a Generic
function identity(item) {
    return item;
}
// console.log(identity<string>('34201'));
// console.log(identity<number>(91));
// console.log(identity<boolean>(true));
// console.log(identity<Cat>({name:'Chipsy',breed:'British Shorthair'})); // Generic of interface type
// another Example
function randomItem(list) {
    var randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
/*
console.log(randomItem<number>([90, 99, 800, 77, 76, 89, 990]));
console.log(randomItem<string>(['foo','bar','poo','doo','yoo']));
console.log(randomItem<Cat>([
    { name: "fifi", breed: 'German White' },
    { name: "fiona", breed: 'American' },
    { name: "chipsy", breed: 'British shorthair' }]));
*/
// inferr type in Generics typescript
randomItem(['aaa', 'bbb', 'ccc',]); // if it works, then it is preferred
// generic function inferr type <string> or <number> from given argument
//Generics in arrow functions and tsx files//
// we need have to use <T,> instead of <T> in tsx file
//multiple parameters generics
function mergeObject(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var obj3 = mergeObject({ name: 'suleman' }, { pets: ['fifi', 'tom'], numofPets: 2 });
function doubleLength(thing) {
    return thing.length * 2;
}
var strchars = doubleLength('oop');
var ans = doubleLength({ length: 89 });
console.log(ans);
console.log(strchars);
console.log(doubleLength({ length: 90 }));
