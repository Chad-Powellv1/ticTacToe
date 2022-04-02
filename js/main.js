/* --- MODEL --- */
class Game {
	constructor() {
		this.board = Array(9).fill()
		this.currentPlayer = 'X';
		this.turn = 0;
		this.gameOver = false;	
	}

	setState = (i, e, gameState) => {
		if(!this.gameOver) { 
			if (this.turn % 2 == 0) {
				this.board[i].textContent = this.currentPlayer;
				this.board[i].dataset.index = 1;
			}
			else {
				this.board[i].textContent = 'O';
				this.board[i].dataset.index= 5;
			}
			this.turn++;
			if(this.turn >= 5) {
				this.gameState();
			}
		}
	}

	setGameOver() {
		/* --- WIN CONDITIONS --- */
		const winner = WIN_CON.some((win) => {
			let firstCon = WIN_CON[0];
			let secondCon = WIN_CON[2];
			let thirdCon = WIN_CON[3];

			return(
				this.board[firstCon] &&
				this.board[firstCon] === this.board[secondCon] &&
				this.board[secondCon] === this.board[thirdCon]
			)
		})

		/* --- DRAW CONDITIONS --- */


	}

	
}

/* --- VIEW --- */
class View {
	constructor(model) {
		this.m = model;
		this.restartButton = null;
		
	}

	render(setState,board) {

		/* --- GENERATE TITLE --- */ 
		let app = document.getElementById('app');
		let title = document.createElement(`${HTML[0].div}`);
		title.setAttribute('class',`${HTML[0].class}`);
		title.style.marginTop = '5%';
		title.style.fontWeight = 'bold';
		title.style.color = 'black';
		title.style.text = `${HTML[0].align}`
		title.textContent = `${HTML[0].text}`
		app.appendChild(title);

		/* --- GENERATE BOARD --- */
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
		
		/* --- RESET BUTTON --- */
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

/* --- CONTROLLER --- */ 
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

