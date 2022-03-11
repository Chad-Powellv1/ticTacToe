// Model  REMEMBER ORDER IS IMPORTANT!!!
class Game {
	constructor() {
		this.board = [];
		this.currentPlayer = 'X';
		this.turn = 0;
		this.gameOver = false;
		


		
	}

	gameState = () => {
		this.winCondition = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		
		for (let i = 0; i < this.winCondition.length; i++) {
			let sum = 0;
			for (let j = 0; j < this.winCondition[i].length; j++) {
				sum += this.board[this.winCondition[i][j]].dataset.index;
				if(sum === 3) {
					
					this.gameOver = true;
					this.note.textContent = "X is the winner! 👏";
					this.turn.textContent = '';
				}

				if(sum === 15) {

					this.gameOver = true;
					this.note.textContent = 'O is the winner! 👏';
					this.turn.textContent = '';
				}
			}
			sum = 0;
		}

		if(this.turn === 9 && this.gameOver) {
			this.gameOver = true;
			this.note.textContent = 'No winner, the game is a draw. 😵'
			this.turn.textContent = '';
		}
	}

	setState = (i, e, gameState) => {
		
		if(!this.gameOver) { 
			
			if (this.turn % 2 == 0) {

				this.board[i].textContent = this.currentPlayer;
				this.board[i].dataset.index = 1;
				// display player X turn
			}

			else {

				this.board[i].textContent = 'O';
				this.board[i].dataset.index= 5;
				// display player O turn
			}

			this.turn++;

			if(this.turn >= 5) {
				this.gameState();
			}

			
		}

	}


}

// View
class View {
	constructor(model) {
		this.m = model;
		this.restartButton = null;
		
	}

	render(setState,board) {

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
			col.setAttribute('data-index', i);
			col.addEventListener('click', (e) => {
				setState(i,e)
				console.log(e)
			}, { once: true })
			board.push(col)
			
			
			row.appendChild(col);
		}
		app.appendChild(row);
		
		//RESET BUTTON
		let resetButton = document.createElement(`${HTML[3].div}`);
		resetButton.setAttribute('type', `${HTML[3].type}`);
		resetButton.setAttribute('class', `${HTML[3].class}`);
		resetButton.textContent = `${HTML[3].text}`;
		row.appendChild(resetButton);

		// this.restartButton.addEventListener('click', )

		//CREATE WINNER NOTIFICATION
		let note = document.createElement(`${HTML[4].div}`);
		note.setAttribute('class', `${HTML[4].class}`)
		resetButton.appendChild(note);
	}
}

// Controller
class Controller {
	constructor() {
		this.m = new Game();
		this.v = new View();
		this.v.render(this.m.setState,this.m.board,this.m.gameState)
	}

	run() {
		this.v.render();
	}
}

// new Controller
let game = new Controller();

