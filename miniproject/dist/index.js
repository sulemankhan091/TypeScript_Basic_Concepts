"use strict";
// function printTwice(msg:string):void{
// 	console.log(msg);
// 	console.log(msg);	
// }
// printTwice("Hello Kia picanto");
// printTwice("Suleman khan")
document; // typescript knows var document:Document
const btn = document.getElementById("btn"); // typescript Non-Null assertion operator
// when we sure that button with id "btn" exist in html then we can use ! operator 
// after ! we dont need btn?.addEventListener etc...
// ! is ts operator not exist in javascript
btn.addEventListener('click', function () {
    console.log(`clicked`);
});
