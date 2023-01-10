/* Some Notes about typescript classes <#START#>*/
/*

1.  readonly property only exist in typescript not in javascript
2.  we can intialize a property by several options
     i. score:number=0;
     ii. score: number | string ;
3.  readonly can be modified after intialization
4.  public and private modifiers are in typescript, not in javascript.
5.  by default every property is public in typescript
6.  public readonly means we can read it but cannot write(change) it
7.  private properties cant be accessible on class instances
8.  private or # keyword can be used to intialize a property but # is only available
->  when we use es2015 or higher in tsconfig.json

9.  private properties or methods can only be called within constructor of class
10. we can assign parameters directly in constructor without intializing first
11. same like javascript setters and getters are treated as properties in typescript
12. static properties only exist on class not on instances of class
13. a class can implement one or more interfaces and properties defined in interface must be
    existed on the class which implements a class interface
14. Abstract class only exist in typescript
15. abstract methods of an abstract class must be implemented on the inherited class
    of the abstract class ,,,, a class at oneTime only can be implemented an interface or
    inherit a class...


*/
/* Some Notes about typescript classes <#END#>*/

/*
class Player {
   public readonly first: string;
    public last: string;
    public nationality: string;
    private score: number;

    // or #score: number can be used as private
    // score= 10;
    // score: number | string;

    constructor(first: string, last: string, nationality: string) {
        this.first = first;
        this.last = last;
        this.nationality = nationality;
        this.score = 10;
        this.secretMethod(); // this will be called first in all constructor properties 
    }

    playerInfo() {
        if (this.nationality === "EN" || this.nationality === "en") {
        console.log(this.first, this.last,"is an English player");
        }else
        console.log(this.first, this.last,"is not an English player",this.score);
    }

    private secretMethod(): void{
        console.log("Lahore daa pawa\nAkhtar Lawa");
    }
}

// const anderson = new Player("Jimmy", "Anderson", "EN");
const kohli = new Player("Virat", "Kohli", "IN");

// kohli.score only accessible within the class
// kohli.first = "KOHLI" // can not change readonly property


// these are errors 
// Player.secretMethod();
// Player.score

// anderson.playerInfo();
kohli.playerInfo();
// kohli.secretMethod() // error
*/

// parameters propertiy shorthand

class Player {
//    public static Jason_Roy: string = 'Jason Roy'; //public keyword is used before static

    constructor( 
        public first: string,
        public last: string,
        protected _score: number, // to inherit this property in SuperPlayer class
        public country: string,
    ) {
        
    }

      playerInfo():void {
        console.log(`${this.first} ${this.last} has ${this._score} against ${this.country}`);
    }
    get fullName(): string { 
        return `${this.first} ${this.last}`;
    }
    get score(): number{
        return this._score;
    }
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error('Score must be greater than zero.');
        } else {
            this._score = newScore;
        }
    }
}

const kohli = new Player('Virat', 'Kohli',83,'Pakistan');

kohli.score = 90; // setter score setting score to 90
let score = kohli.score //getter score reading score
// console.log(score);

// kohli.Jason_Roy //error static property did not exist on this instance of class
// let d_player  = Player.Jason_Roy // static property only accessible with class Name
// console.log(d_player);


// kohli.playerInfo(); // valid
// console.log(kohli); // valid
// console.log(kohli.fullName); // valid


class SuperPlayer extends Player{
    public isAdmin: boolean = true;

    maxScore(): number{
        return this._score = 10000;
    }
}

const kane = new SuperPlayer('kane','williamson',76,'Australia');

// kane.score = 90;
// let score2 = kane.score;
// console.log(score2);

// let kane_maxScore = kane.maxScore();
// kane.maxScore() // when maxScore() is called then _score is assigned 10000
// kane.playerInfo() // 76 score
// console.log(kane_maxScore);

// classes with interfaces

interface Colorfull {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorfull { 
    constructor(public color: string) {
    }
}

class Jacket implements Colorfull, Printable { 
    constructor(public brand:string, public color: string) {
        
    }
    print(): void {
        console.log(`${this.brand}  ${this.color} Jacket`);
    }
}
const jacket1 = new Jacket("Nike", "blue");
const redBike = new Bike("red");

// jacket1.print();
// console.log(redBike.color);
// console.log(jacket1.brand);
// console.log(jacket1.color);


////////////////////////////////
//Abstract class

abstract class Employee {
    constructor(public first: string, public last: string) {
        
    }
    abstract getPay(): number;
    greet(): void{
        console.log('Hello');
    }
}

class FullTimeEmployee extends Employee { 

    constructor(first: string, last: string, private salary: number) {
        super(first, last); // passing first and last properties to parent constructor

    }

    getPay(): number {
        return this.salary;
    }
}


class PartTimeEmployee extends Employee { 

    constructor(
        first: string,
        last: string,
        private hourlyRate: number,
        private numHourWork: number
    ) {
        super(first, last);
    }
    getPay(): number { 
        return this.hourlyRate * this.numHourWork;
    }
}

const Jashan = new FullTimeEmployee('Jashan', '', 9000);
console.log(Jashan.getPay());

const Shaami = new PartTimeEmployee('Shahami', '', 200, 20);
console.log(Shaami.getPay());