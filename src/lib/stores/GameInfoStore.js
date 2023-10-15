import { writable } from 'svelte/store';
import testingBoard from '$lib/boards/testingboard.json';

import boards from '$lib/boards/gameboards.json';

function getRandomInt(min, max) {
    // The maximum is exclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
  
    // Math.random() returns something between 0 (inclusive) and 1 (exclusive),
    // which is then scaled to the desired range and rounded down to an integer.
    return Math.floor(Math.random() * (max - min) + min);
  }

const boardRNG = getRandomInt(0, 6);

export const gameInfo = writable({
    player1: 'player 1',
    player2: 'player 2',
    gameStarted: false,
	gameTurn: 0,
	currentPlayer: 1,
	characters: ['wizard', 'reaper', 'fighter', 'reaper', 'dancer', 'reaper', 'mage', 'reaper'],
    maps: boards.boards.length,
	currentActiveCharacter: 0,
    gameBoard: boards.boards[boardRNG]
});
