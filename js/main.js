// Model
class Game {
	constructor() {
		this.board = [];
		this.currentPlayer = 'X';
		this.turn = 0;
		this.clicked = false;
		this.gameOver = false;

	}

	setState(i, e) {

		if(!this.gameOver && this.board[i].clicked) {
			if (this.turn % 2 == 1) {

				this.board[i].textContent = 'X';
			}

			else {

				this.board[i].textContent = 'O';
			}

			this.board[i].clicked = true;
			this.turn++;

			
		}
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
		let title = document.createElement(`${HTML[0].div}`);
		title.setAttribute('class',`${HTML[0].class}`);
		title.style.marginTop = '5%';
		title.style.fontWeight = 'bold';
		title.style.color = 'black';
		title.style.text = `${HTML[0].align}`
		title.textContent = `${HTML[0].text}`
		app.appendChild(title);

		//GENERATE BOARD
		let row = document.createElement(`${HTML[1].div}`);
		row.setAttribute('class', `${HTML[1].class}`);
		for(let i = 0; i < 9; i++) {
			let col = document.createElement(`${HTML[2].div}`);
			col.setAttribute('class', `${HTML[2].class}`);
			col.setAttribute('type', `${HTML[2].type}`);
			col.addEventListener('click', (e) => {
				e.target.enabled = true;
				console.log(e)
			})
			row.appendChild(col);
			
		}
		app.appendChild(row);
		
		//RESET BUTTON
		let resetButton = document.createElement(`${HTML[3].div}`);
		resetButton.setAttribute('type', `${HTML[3].type}`);
		resetButton.setAttribute('class', `${HTML[3].class}`);
		resetButton.textContent = `${HTML[3].text}`;
		row.appendChild(resetButton);

		this.restartButton.addEventListener('click', )
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

// new Controller
let game = new Controller();
game.run();
