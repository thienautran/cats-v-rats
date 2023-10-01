import { writable } from 'svelte/store';

export const gameInfo = writable({
    player1: '',
    player2: '',
    gameStarted: false
});
