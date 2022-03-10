const WIN_COND = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8][(0, 4, 8)],
	[2, 4, 6],
];

const HTML = [
	{
		div: 'div',
		class: 'h1 text-center mb-5',
		text: 'Tic Tac Toe',
	},

	{
		div: 'div',
		class: 'row d-flex justify-content-center px-5 mx-5',
	},

	{
		div: 'div',
		class: 'col-4 pt-5 pb-5 text-center border border-success fs-1',
		type: "button",
		id: "clickable"

	},

	{
		div: "div",
		type: 'button',
		class: 'col-4 btn btn-danger btn-lg mt-5',
		text: 'Reset Game'
	}
];
