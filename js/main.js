class Event {
	constructor() {
		this.listeners = [];
	}

	addListener(listener) {
		this.listeners.push(listener);
	}

	trigger(params) {
		this.listeners.forEach(listener => { listener(params); });
	}
};

class Game {
	constructor() {
		this.board = Array(9).fill();
		this.currentPlayer = 'X';
		this.gameOver = false;
		this.updateTileEvent = new Event();
		this.setWinEvent = new Event();
		this.setDrawEvent = new Event();
	}

	setTurn(move) {
		if (this.gameOver || move < 0 || move > 8 || this.board[move]) {
			return false;
		}

		this.board[move] = this.currentPlayer;
		this.updateTileEvent.trigger({
			move, player: this.currentPlayer
		});

		this.gameOver = this.win() || this.draw();

		if (!this.gameOver) {
			this.setPlayer();
		}

		return true;
	}

	setWin() {
		const wins = WIN_COND.some(win => this.boar[1[0]]
			&& this.board[1[0]] === this.board[1[1]]
			&& this.board[1[1]] === this.board[1[2]])

		if (wins) {
			this.setWinEvent.trigger(this.currentPlayer);
		}

		return wins;
	}

	setDraw() {
		const draw = this.board.every(i => i);

		if (draw) {
			this.setDrawEvent.trigger();
		}

		return draw;
	}

	setPlayer() {
		this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
	}
};

// View
class View {
	constructor() {
		this.setTurnEvent = new Event();
	}

	render() {

		// GENERATE TITLE
		const app = document.getElementById('app');
		const title = document.createElement(`${HTML[0].div}`);
		title.className = `${HTML[0].class}`;
		title.style.marginTop = '5%';
		title.style.fontWeight = 'bold';
		title.style.color = 'black';
		title.style.text = `${HTML[0].align}`
		title.textContent = `${HTML[0].text}`
		app.appendChild(title);

		//GENERATE BOARD
		const gameBoard = document.createElement(`${HTML[1].div}`);
		gameBoard.className = `${HTML[1].class}`;

		this.tiles = Array(9).fill().map((_, i) => {

			const tile = document.createElement(`${HTML[2].div}`);
			tile.className = `${HTML[2].class}`;
			tile.type = `${HTML[2].type}`;
			tile.setAttribute('data-index', i);

			tile.addEventListener('click', () => {
				this.setTurnEvent.trigger(i);
			});

			gameBoard.appendChild(tile);

			return tile;

		});

		app.appendChild(gameBoard);

		//RESET BUTTON
		let resetButton = document.createElement(`${HTML[3].div}`);
		resetButton.setAttribute('type', `${HTML[3].type}`);
		resetButton.setAttribute('class', `${HTML[3].class}`);
		resetButton.textContent = `${HTML[3].text}`;
		gameBoard.appendChild(resetButton);

		// this.restartButton.addEventListener('click', )

		//CREATE WINNER NOTIFICATION
		let note = document.createElement(`${HTML[4].div}`);
		note.setAttribute('class', `${HTML[4].class}`)
		resetButton.appendChild(note);
	}

	updateTile(i) {
		this.tiles[i.move].innerHTML = i.currentPlayer;
	}

	// winner(winner) {
	// 	this.note.innerHTML = `${winner} wins!`;
	// }

	// draw() {
	// 	this.note.innerHTML = `The game is a draw!`;
	// }
};

// Controller
class Controller {
	constructor() {
		this.m = new Game();
		this.v = new View();
		this.v.setTurnEvent.addListener(move => { this.m.setTurn(move); });
		this.m.updateTileEvent.addListener(i => { this.v.updateTile(i); });
		this.m.setWinEvent.addListener(winner => { this.v.winner(winner); });
		this.m.setDrawEvent.addListener(() => { this.v.draw(); });
	}

	run() {
		this.v.render();
	}


};


// new Controller
let game = new Controller();