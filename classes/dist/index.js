//'use strict';
// console.log('it is working')

class Player {
	static description = 'player is playing a game'; // this property only exist on class Player
	#score = 0; //private property
	numLives = 4;
	constructor(first, last) {
		this.first = first;
		this.last = last;
		// this.#secret();
	}

	static playerInfo() {
		console.log('playerInfo method called');
	}
	static randomPlayer() {
		return new Player('Kitty', 'Mister');
	}

	// set and get methods treated as properties

	get score() {
		return this.#score;
	}

	get fullname() {
		return `${this.first} ${this.last}`;
	}

	set fullname(fullname) {
		const [first, last] = fullname.split(' ');
		this.first = first;
		this.last = last;
	}

	set score(newScore) {
		if (newScore < 0) {
			throw new Error('Score must be positive number');
		}
		this.#score = newScore;
	}

	updateScore(newScore) {
		this.#score = newScore;
	}

	taunt() {
		console.log('Hoo Hoo');
	}
	loseLife() {
		this.numLives -= 1;
	}
	#secret() {
		console.log('secret');
	}
}

class AdminPlayer extends Player {
	isAdmin = true;

	constructor(first, last, powers) {
		super(first, last);
		this.powers = powers;
	}
}

const admin1 = new AdminPlayer('M', 'Ali', ['Delete life', 'restore life']);
console.log(admin1);

// const player1 = new Player('John', 'Doe');
// const player2 = new Player('Ellis', 'jenkins');

// player1.fullname = 'Dani Morison';
// console.log(player1.fullname);

// player1.updateScore(29);
// let score = player1.getScore();

// console.log(score);

// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);

// console.log(player1.fullname);
// console.log((player1.score = 9));
// console.log(player1.score);
// console.log(player1.first);
// console.log(player2.first);
// player1.taunt();
// player2.taunt();
