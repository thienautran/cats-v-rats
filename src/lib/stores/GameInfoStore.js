import { writable } from 'svelte/store';

export const gameInfo = writable({
    player1: 'player 1',
    player2: 'player 2',
    gameStarted: false,
	gameTurn: 0,
	currentPlayer: 1,
	characters: ['wizard', 'reaper', 'fighter', 'reaper', 'dancer', 'reaper', 'mage', 'reaper'],
	currentActiveCharacter: 0,
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
