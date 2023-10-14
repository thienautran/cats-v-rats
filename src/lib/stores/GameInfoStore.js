import { writable } from 'svelte/store';
import testingBoard from '$lib/boards/testingboard.json';

export const gameInfo = writable({
    player1: 'player 1',
    player2: 'player 2',
    gameStarted: false,
	gameTurn: 0,
	currentPlayer: 1,
	characters: ['wizard', 'reaper', 'fighter', 'reaper', 'dancer', 'reaper', 'mage', 'reaper'],
	currentActiveCharacter: 0,
    gameBoard: testingBoard.board
});
