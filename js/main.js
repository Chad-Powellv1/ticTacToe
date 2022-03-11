// Model  REMEMBER ORDER IS IMPORTANT!!!
class Game {
	constructor() {
		this.board = [];
		this.currentPlayer = 'X';
		this.turn = 0;
		this.gameOver = false;


		
	}

	setState = (i, e) => {
		// [0,1,2,3,4,5,6,7,8,9]
		if(!this.gameOver) { // don't you want to check the !this.gameOver? Makes Sense.
			console.log(this)
			if (this.turn % 2 == 0) {
				this.board[i].textContent = 'X';
			}

			else {

				this.board[i].textContent = 'O';
			}

			this.board[i].clicked = true;
			this.turn++;

			
		}

	}

	gameState() {
		for (let i = 0; i < `${WIN_COND}`[i].length; i++) {
			let sum = 0;
			for (let j = 0; j < `${WIN_COND}`[i].length; j++) {
				sum += this.board[`${WIN_COND}`[i][j]].value;
				if(sum === 3) {
					this.notification.textContent = "X is the winner! 👏";
					this.gameOver = true;
					this.turn.textContent = '';
				}

				if(total === 15) {
					this.notification.textContent = 'O is the winner! 👏';
					this.gameOver = true;
					this.turn.textContent = '';
				}
			}
			sum = 0;
		}

		if(this.turn === 9 && this.gameOver === false) {
			this.notification.textContent = 'No winner, the game is a draw. 😵'
			this.turn.textContent = '';
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

	}
}

// Controller
class Controller {
	constructor() {
		this.m = new Game();
		this.v = new View();
		this.v.render(this.m.setState,this.m.board)
	}

	run() {
		this.v.render();
	}
}

// new Controller
let game = new Controller();

