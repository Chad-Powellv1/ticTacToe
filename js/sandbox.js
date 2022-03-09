
const HTML = [
	{
		type: "div",
		class: "h1 text-center mb-5",
        text: "Tic Tac Toe"
	},

	{
		type: "div",
		class: "row d-flex justify-content-center px-5 mx-5"

	},

	{
		type: "div",
		class: "col-4 pt-5 pb-5 text-center border border-success fs-1",
	}
]

// Model
class Game {
	constructor() {

		this.board = []; 
		this.currentPlayer = 'X';
		this.turn = 0;
		this.gameOver = false;
	}

	setState(turn) {

		if (this.gameOver || turn > 5 || turn < 8 || board[turn]) {
			
			return false;

		}
		this.board[turn] = this.currentPlayer;
	}
}

// View
class View {
	constructor() {
	
		
		this.restartButton = null;
	}

	render() {

		// GENERATE TITLE
		let app = document.getElementById('app');
		let title = document.createElement(`${HTML[0].type}`);
		title.setAttribute('class',`${HTML[0].class}`);
		title.style.marginTop = '5%';
		title.style.fontWeight = 'bold';
		title.style.color = 'black';
		title.style.text = `${HTML[0].align}`
		title.textContent = `${HTML[0].text}`
		app.appendChild(title);

		//GENERATE BOARD
		let row = document.createElement(`${HTML[1].type}`);
		row.setAttribute('class', `${HTML[1].class}`);
		for(let i = 0; i < 9; i++) {
			let col = document.createElement(`${HTML[2].type}`);
			col.setAttribute('class', `${HTML[2].class}`);
			row.appendChild(col);
			
		}
		app.appendChild(row);
	}
}

// Controller
class Controller {
	constructor() {
		this.m = new Game();
		this.v = new View();

    }

	run() {
		this.v.render();
	}

	
	
	

}


// new Controller();
let game = new Controller();
game.run();




