

// function printTwice(msg:string):void{
// 	console.log(msg);
// 	console.log(msg);	
// }

 // printTwice("Hello Kia picanto");
 // printTwice("Suleman khan")
 document // typescript knows var document:Document
 //const btn = document.getElementById("btn")!; // typescript Non-Null assertion operator
 



// when we sure that button with id "btn" exist in html then we can use ! operator 
// after ! we dont need btn?.addEventListener etc...
// ! is ts operator not exist in javascript

 //? means if HTMLelement exists then return it, or return null;
    
//as keyword in typescript or type assertion 
// let mystery: unknown = "mysterious thing";
// let numofChars = (mystery as string).length;
// console.log(numofChars);


// e: SubmitEvent by default in form.addEventListener
// btn.addEventListener('click', function () {
//     alert(input.value);
//     input.value = '';
// })