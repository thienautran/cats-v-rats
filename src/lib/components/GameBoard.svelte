<script>
	import { source } from 'sveltekit-sse';

	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import { fade } from 'svelte/transition';
	import Tile from './Tile.svelte';

	import { Sound } from 'svelte-sound';
	import gameEndSound from '$lib/assets/mixkit-game-bonus-reached-2065.wav';

	import gameBackground from '$lib/assets/game/background.svg';
	import GameCharacterHintCard from '$lib/components/GameCharacterHintCard.svelte';

	const endSound = new Sound(gameEndSound);
	const background = `<svg>gameBackground<svg>`;
	const testValue = source('/test-sse').onError((event) => console.error({ event }));

	function updateStateTest() {
		gameInfo.update((e) => {
			let board = e.gameBoard;
			board[0][0] = testValue;

			return { ...e, gameBoard: board };
		});
	}

	function stopGame() {
		gameInfo.update((state) => {
			return { ...state, gameStarted: false };
		});
		// console.log(gameInfo);
		endSound.play();
	}

	function turnHandler() {
		gameInfo.update((gameState) => {
			let turn = gameState.gameTurn + 1;
			let character = turn % gameState.characters.length;

			return { ...gameState, gameTurn: turn, currentActiveCharacter: character };
		});
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
	transition:fade={{ delay: 200, duration: 300 }}
	class="min-h-screen flex flex-col justify-center items-center w-full gap-10"
>
	<h1>Game: {$gameInfo.player1} vs {$gameInfo.player2}</h1>

	<div class="w-[95%] md:w-1/3">
		<div
			tabindex="0"
			role="gameboard"
			aria-label="game board"
			class="w-full h-full flex flex-row justify-center items-center flex-wrap relative border-solid border-[#bd7e4a] border-8 bg-black"
		>
			{#each $gameInfo.gameBoard as row, r}
				{#each row as piece, c}
					{#if piece === 'f' || piece === 'mouse' || piece === 'cat'}
						{#if piece === 'cat'}
							<Tile coordinates={[r, c]} tileType={'f'} piece={'cat'} />
						{:else if piece === 'mouse'}
							<Tile coordinates={[r, c]} tileType={'f'} piece={'mouse'} />
						{:else}
							<Tile coordinates={[r, c]} tileType={'f'} piece={'none'} />
						{/if}
					{:else if piece === 'w'}
						<Tile coordinates={[r, c]} tileType={'w'} />
					{:else}
						<Tile coordinates={[r, c]} tileType={'n'} />
					{/if}
				{/each}
			{/each}
			<img
				src={gameBackground}
				class="w-full h-full absolute top-0 left-0 -z-10"
				alt="game board"
			/>
		</div>
	</div>
	<GameCharacterHintCard character={$gameInfo.characters[$gameInfo.currentActiveCharacter]} />

	<button class="bg-red-600" on:click={stopGame}>Stop game</button>
	<button class="bg-sky-600" on:click={testMovement}>move rat</button>
	<button class="bg-green-600 px-2 py-2 rounded-lg text-xl" on:click={turnHandler}
		>Increase game counter</button
	>
	<h3>{$gameInfo.characters[$gameInfo.currentActiveCharacter]}</h3>
	<p>{$gameInfo.gameTurn}</p>
</div>
