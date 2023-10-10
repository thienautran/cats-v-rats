import { writable } from 'svelte/store';

export const gameInfo = writable({
    player1: '',
    player2: '',
    gameStarted: false,
    gameBoard: [
		['mouse', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'mouse'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'cat', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['mouse', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'mouse']
	]
});
