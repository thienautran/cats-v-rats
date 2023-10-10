<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import { fade } from 'svelte/transition';
	import Tile from './Tile.svelte';

	import { Sound } from 'svelte-sound';
	import gameEndSound from '$lib/assets/mixkit-game-bonus-reached-2065.wav';

	const endSound = new Sound(gameEndSound);
	function stopGame() {
		gameInfo.update((state) => {
			return { ...state, gameStarted: false };
		});
		// console.log(gameInfo);
		endSound.play();
	}

	function movePiece(initialCoordinates, newCoordinates) {
		gameInfo.update((gameState) => {
			let board = gameState.gameBoard;
			let currentPiece = board[initialCoordinates[0]][initialCoordinates[1]];
			let currentFree = board[newCoordinates[0]][newCoordinates[1]];
			console.log(currentPiece, currentFree);

			// swap the tiles
			board[newCoordinates[0]][newCoordinates[1]] = currentPiece;
			board[initialCoordinates[0]][initialCoordinates[1]] = currentFree;

			return { ...gameState, gameBoard: board };
		});
	}

	function testMovement() {
		movePiece([0, 0], [0, 2]);
		// movePiece([0, 1], [0, 0]);
	}
	function testRat() {
		gameInfo.update((state) => {
			let g = state.gameBoard;
			let piece = g[0][0];
			if (piece === 'mouse') {
				g[0][0] = 'f';
			} else {
				g[0][0] = 'mouse';
			}
			return { ...state, gameboard: g };
		});
	}
	// setInterval(testRat, 1000);

	// setInterval(testMovement, 3000);
</script>

<div
	transition:fade={{ delay: 500, duration: 1000 }}
	class="min-h-screen min-w-full flex flex-col space-y-10 justify-center items-center"
>
	<div
		tabindex="0"
		role="gameboard"
		aria-label="game board"
		class="h-vw-5 w-vw-5 bg-black flex flex-row justify-center items-center flex-wrap"
	>
		{#each $gameInfo.gameBoard as row, r}
			{#each row as piece, c}
				{#if piece === 'f' || piece === 'mouse' || piece === 'cat'}
					{#if piece === 'cat'}
						<Tile value={[r, c]} tileType={'f'} piece={'cat'} orientation={'none'} />
					{:else if piece === 'mouse'}
						<Tile value={[r, c]} tileType={'f'} piece={'mouse'} orientation={'none'} />
					{:else}
						<Tile value={[r, c]} tileType={'f'} piece={'none'} orientation={'none'} />
					{/if}
				{:else if piece === 'w' && r % 2 !== 0 && c % 2 === 0}
					<Tile value={[r, c]} tileType={'w'} orientation={'h'} piece={'none'} />
				{:else if piece === 'w' && r % 2 === 0 && c % 2 !== 0}
					<Tile value={[r, c]} tileType={'w'} orientation={'v'} piece={'none'} />
				{:else}
					<Tile value={[r, c]} tileType={'n'} piece={'none'} orientation={'none'} />
				{/if}
			{/each}
		{/each}
	</div>
	<button on:click={stopGame}>Stop game</button>
	<button class="bg-red-600 px-2 py-2" on:click={testMovement}>move rat</button>
	<h3>{$gameInfo.gameBoard[0][0]}</h3>
</div>
