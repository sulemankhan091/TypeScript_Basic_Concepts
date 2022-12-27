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

greetEidulFitar();