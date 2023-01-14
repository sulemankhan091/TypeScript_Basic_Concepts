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
const input = document.querySelector<HTMLInputElement>('#username')!; // ! for I am sure and
const btn = document.querySelector<HTMLButtonElement>('.btn')!;

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
function identity<Type>(item: Type): Type {
	// T is used mostly instead of Type
	return item;
}

interface Cat {
	name: string;
	breed: string;
}

// console.log(identity<string>('34201'));
// console.log(identity<number>(91));
// console.log(identity<boolean>(true));
// console.log(identity<Cat>({name:'Chipsy',breed:'British Shorthair'})); // Generic of interface type

// another Example

function randomItem<T>(list: T[]): T {
	const randIndex = Math.floor(Math.random() * list.length);
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

randomItem(['aaa', 'bbb', 'ccc']); // if it works, then it is preferred
// generic function inferr type <string> or <number> from given argument

//Generics in arrow functions and tsx files//
// we need have to use <T,> instead of <T> in tsx file

//multiple parameters generics

function mergeObject<T extends object, U extends object>(object1: T, object2: U) {
	// T&U are convention as i,j,k in for loop
	return {
		...object1,
		...object2,
	};
}

const obj3 = mergeObject({ name: 'suleman' }, { pets: ['fifi', 'tom'], numofPets: 2 });

// mergeObject({name:'philps'},90)  // error type number is not assignable to type object

interface lenghty {
	length: number;
}

function doubleLength<T extends lenghty>(thing: T): number {
	return thing.length * 2;
}

const strchars = doubleLength('oop');
const ans = doubleLength({ length: 89 });
// console.log(ans);
// console.log(strchars); // 6 is output because length property exist on strings
// console.log(doubleLength({length: 90}));

//giving a default type to a generic type
function makeEmptyList<T = number>(): T[] {
	return [];
}

const nums = makeEmptyList(); // by default nums is number array.
nums.push(9, 8, 7); // thats fine
// nums.push("ten"); // argument of type string is not assignable to type number

const boolArray = makeEmptyList<boolean>();
boolArray.push(true, true, false); // this is fine
// boolArray.push(8, 9); type number not assignable to type boolean
// boolArray.push('ha ha ha women!!!'); // type string not assignable to type boolean

/* using generics in classes */

interface Song {
	title: string;
	artist: string;
}
interface Video {
	title: string;
	creator: string;
	resolutions: string;
}

class Playlist<T> {
	public queue: T[] = [];
	add(el: T) {
		this.queue.push(el);
	}
}

const playlist_1 = new Playlist<Song>(); // class of type Song
playlist_1.add({ title: 'Dawn', artist: 'vesky' });

const playlist_2 = new Playlist<Video>(); // class of type Video
playlist_2.add({
	title: 'Samsung A73 unboxing',
	creator: 'Samsung Inc',
	resolutions: '1920 X 1080',
});
