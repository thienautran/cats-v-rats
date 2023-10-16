<script>
	import { source } from 'sveltekit-sse';

	import { gameInfo } from '$lib/stores/GameInfoStore.js';

	import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import Tile from './Tile.svelte';

	import { Sound } from 'svelte-sound';
	import gameEndSound from '$lib/assets/mixkit-game-bonus-reached-2065.wav';
	import pieceMove from '$lib/assets/396705__chaosentertainment__dragslide1.wav';
	import pieceDeath from '$lib/assets/445958__breviceps__cartoon-bat-mouse-squeak.wav';

	import gameBackground from '$lib/assets/game/background.svg';

	import GameCharacterHintCard from '$lib/components/GameCharacterHintCard.svelte';

	const endSound = new Sound(gameEndSound);
	const moveSound = new Sound(pieceMove);
	const deathSound = new Sound(pieceDeath);
	const mice = ['wizard', 'fighter', 'dancer', 'mage'];

	// lookups
	const rows = { 0: 'A', 2: 'B', 4: 'C', 6: 'D', 8: 'E', 10: 'F', 12: 'G' };
	const cols = { 0: '1', 2: '2', 4: '3', 6: '4', 8: '5', 10: '6', 12: '7' };

	// handles movement
	let formValue = '';

	let changeCard = 'fighter';
	const background = `<svg>gameBackground<svg>`;

	const testValue = source('/test-sse').onError((event) => console.error({ event }));
	let voices = [];
	speechSynthesis.addEventListener('voiceschanged', (ev) => {
		voices = speechSynthesis.getVoices();
	});

	let voiceIndex = 0;
	$: voice = voices[voiceIndex];

	$: possibleMoves = getPossibleMoves($gameInfo.currentActiveCoordinates);
	function getCoordinates(char) {
		for (let i = 0; i < $gameInfo.gameBoard.length; i++) {
			for (let j = 0; j < $gameInfo.gameBoard[i].length; j++) {
				if ($gameInfo.gameBoard[i][j] === char) {
					return [i, j];
				}
			}
		}
	}

	function getPossibleMoves(coordinates) {
		let moves = [];
		// subtract 2 from row = up
		if (coordinates[0] - 2 >= 0) {
			moves.push(['up', [coordinates[0] - 2, coordinates[1]]]);
		}
		// add 2 to row to move down
		if (coordinates[0] + 2 <= 12) {
			moves.push(['down', [coordinates[0] + 2, coordinates[1]]]);
		}
		// subtract 2 from columns = left
		if (coordinates[1] - 2 >= 0) {
			moves.push(['left', [coordinates[0], coordinates[1] - 2]]);
		}
		// add 2 to columns = right
		if (coordinates[1] + 2 <= 12) {
			moves.push(['right', [coordinates[0], coordinates[1] + 2]]);
		}
		return moves;
	}

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
			let player = gameState.currentPlayer;
			let activeCharacter = gameState.currentActiveCharacter;
			let activeCoordinates = gameState.currentActiveCoordinates;
			let rat = gameState.ratIndex;
			// swap players every turn
			if (player === gameState.player1) {
				player = gameState.player2;
				activeCharacter = 'reaper';
				activeCoordinates = getCoordinates(activeCharacter);
			} else {
				player = gameState.player1;
				if (rat === gameState.aliveRats.length - 1) {
					rat = 0;
				} else {
					rat++;
				}
				activeCharacter = gameState.aliveRats[rat];
				activeCoordinates = getCoordinates(activeCharacter);
			}

			return {
				...gameState,
				gameTurn: turn,
				currentPlayer: player,
				currentActiveCharacter: activeCharacter,
				currentActiveCoordinates: activeCoordinates,
				ratIndex: rat
			};
		});
	}

	function delay(interval) {
		// Return a new promise.
		return new Promise((resolve) => {
			// Use setTimeout to wait for the specified interval (in milliseconds)
			setTimeout(resolve, interval);
		});
	}

	async function movePiece(initialCoordinates, newCoordinates) {
		let kill = false;
		let piece;
		let killedPiece;
		gameInfo.update((gameState) => {
			let board = gameState.gameBoard;
			let currentPiece = board[initialCoordinates[0]][initialCoordinates[1]];
			piece = currentPiece;
			let currentFree = board[newCoordinates[0]][newCoordinates[1]];
			let alive = gameState.aliveRats;
			// console.log(currentPiece, currentFree);
			if (mice.includes(currentFree) && currentPiece === 'reaper') {
				alive.splice(alive.indexOf(currentFree), 1);
				killedPiece = currentFree;
				currentFree = 'f';
				kill = true;

				deathSound.play();
			}

			// swap the tiles
			board[newCoordinates[0]][newCoordinates[1]] = currentPiece;
			board[initialCoordinates[0]][initialCoordinates[1]] = currentFree;

			return { ...gameState, gameBoard: board, aliveRats: alive };
		});

		moveSound.play();

		if (kill === false) {
			let u = new SpeechSynthesisUtterance(
				`${piece} moved from ${rows[initialCoordinates[0]]}${cols[initialCoordinates[1]]} to ${
					rows[newCoordinates[0]]
				}${cols[newCoordinates[1]]}`
			);
			u.voice = voice;
			speechSynthesis.speak(u);
		}
		if (kill === true) {
			let u = new SpeechSynthesisUtterance(
				`${piece} moved from ${rows[initialCoordinates[0]]}${cols[initialCoordinates[1]]} to ${
					rows[newCoordinates[0]]
				}${cols[newCoordinates[1]]} and consumed ${killed}`
			);
			u.voice = voice;
			speechSynthesis.speak(u);
		}
	}

	function handleUserMovement() {
		movePiece($gameInfo.currentActiveCoordinates, formValue);
		turnHandler();
		// console.log(typeof formValue);
	}

	async function simulateGame() {
		// let u = new SpeechSynthesisUtterance(`Ratthew moved from G5 to F5`);
		// u.voice = voice;
		// speechSynthesis.speak(u);
		await delay(5000);
		changeCard = 'fighter';
		movePiece([8, 12], [10, 12]);
		let u = new SpeechSynthesisUtterance(`Ratthew moved from G3 to G2`);
		u.voice = voice;
		speechSynthesis.speak(u);
		changeCard = 'reaper';
		turnHandler();
		await delay(6000);

		movePiece([8, 10], [8, 12]);
		let v = new SpeechSynthesisUtterance(`Grim reaper moved from F3 to G3`);
		v.voice = voice;
		speechSynthesis.speak(v);
		changeCard = 'dancer';
		turnHandler();
		await delay(8000);

		movePiece([2, 10], [0, 8]);
		let r = new SpeechSynthesisUtterance(`Rizzo Lizzo moved from F6 to E7`);
		r.voice = voice;
		speechSynthesis.speak(r);
		changeCard = 'reaper';
		turnHandler();
		await delay(5000);

		movePiece([8, 12], [10, 12]);
		let q = new SpeechSynthesisUtterance(`Grim reaper moved from G3 to G2 and consumes Ratthew`);
		q.voice = voice;
		speechSynthesis.speak(q);
		changeCard = 'mage';
		turnHandler();
		await delay(5000);
	}

	function testMovement() {
		movePiece([0, 2], [0, 0]);
		// movePiece([0, 1], [0, 0]);
	}

	function testIncreaseCounter() {
		turnHandler();
		let u = new SpeechSynthesisUtterance(`Ratticus added 1 turn to the turn counter`);
		u.voice = voice;
		speechSynthesis.speak(u);
		changeCard = 'reaper';
	}
	// setInterval(testMovement, 6000);
</script>

<div
	transition:fade={{ delay: 200, duration: 300 }}
	class="min-h-screen flex flex-col justify-center items-center w-full gap-5"
>
	<h1 on:click={simulateGame} class="bg-blue-600 px-5 py-3 rounded-lg">
		Game: {$gameInfo.player1} vs {$gameInfo.player2}
	</h1>

	<div class="flex flex-col lg:flex-row justify-center items-center">
		<div
			transition:slide={{ delay: 1000, duration: 5000, easing: quintOut, axis: 'y' }}
			class="relative border-solid border-[10px] border-[#c28149] rounded-lg"
		>
			<img
				src={gameBackground}
				alt="game board"
				class="w-[350px] h-[350px] lg:h-[550px] lg:w-[550px] -z-10 absolute"
			/>
			<div role="grid" class="game h-[350px] w-[350px] lg:h-[550px] lg:w-[550px]">
				{#each $gameInfo.gameBoard as row, r}
					{#each row as piece, c}
						{#if piece === 'f' || piece === 'mouse' || piece === 'cat' || piece === 'mountain' || piece === 'wizard' || piece === 'mage' || piece === 'fighter' || piece === 'dancer' || piece === 'reaper'}
							<Tile coordinates={[r, c]} tileType={'f'} {piece} />
						{:else if piece === 'w'}
							<Tile coordinates={[r, c]} tileType={'w'} />
						{:else}
							<Tile coordinates={[r, c]} tileType={'n'} />
						{/if}
					{/each}
				{/each}
			</div>
		</div>
		<div>
			<h2>
				It is currently {$gameInfo.currentPlayer}'s turn to move and we are on turn {$gameInfo.gameTurn}
			</h2>
			<GameCharacterHintCard character={$gameInfo.currentActiveCharacter} />

			{#if $gameInfo.currentActiveCharacter === 'wizard'}
				<button class="bg-green-600 px-2 py-2 rounded-lg text-xl" on:click={testIncreaseCounter}
					>Use Ratticus's ability, add 1 turn</button
				>
			{/if}
			<form
				class="flex flex-col justify-center items-center gap-6"
				on:submit|preventDefault={handleUserMovement}
			>
				<select class="py-[2px] px-[2px]" name="moves" bind:value={formValue}>
					{#each possibleMoves as move}
						<option value={move[1]}>{move[0]}</option>
					{/each}
				</select>
				<button class="bg-green-600 px-2 py-2 rounded-lg text-xl">Make move</button>
			</form>
		</div>
	</div>
</div>
