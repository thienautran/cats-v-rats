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

// const boardRNG = getRandomInt(0, 6);
const boardRNG = 0;

export const gameInfo = writable({
    player1: 'player 1',
    player2: 'player 2',
    gameStarted: false,
    gameTurn: 1,
    currentPlayer: 'player 1',
    aliveRats: [boards.boards[boardRNG][0][0], boards.boards[boardRNG][0][12], boards.boards[boardRNG][12][0], boards.boards[boardRNG][12][12]],
    maps: boards.boards.length,
    currentActiveCharacter: boards.boards[boardRNG][0][0],
    currentActiveCoordinates: [0, 0],
    ratIndex: 0,
    gameBoard: boards.boards[boardRNG]
});
