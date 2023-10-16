<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import { fade } from 'svelte/transition';
	import { Sound } from 'svelte-sound';
	import gamesound from '$lib/assets/mixkit-extra-bonus-in-a-video-game-2045.wav';
	import gif from '$lib/assets/rat-jam.gif';
	const startSound = new Sound(gamesound);

	let player1 = 'Player 1';
	let player2 = 'Player 2';

	const handleSubmitForm = () => {
		// console.log(player1, player2);
		gameInfo.update((gameState) => {
			gameState.player1 = player1;
			gameState.player2 = player2;
			gameState.gameStarted = true;
			gameState.currentPlayer = player1;
			return gameState;
		});
		startSound.play();
	};
</script>

<div
	transition:fade={{ delay: 200, duration: 300 }}
	class="flex flex-col gap-12 text-xl justify-center items-center text-center min-h-screen relative"
>
	<img src={gif} class="absolute -z-10 lg:h-full lg:w-full h-full opacity-60" />
	<div>
		<div class="flex flex-col gap-4 py-4">
			<h1 class="lg:text-4xl text-2xl font-bold bg-blue-600 lg:px-4 lg:py-4 py-1 rounded-lg mx-4">
				Welcome to Cats vs Rats!
			</h1>

			<i class="">Before we get started, please enter some player info below.</i>
		</div>

		<form
			class="flex flex-col justify-center items-center gap-6"
			on:submit|preventDefault={handleSubmitForm}
		>
			<label>
				Player 1:
				<input
					type="text"
					placeholder="Enter a name for Player 1: "
					bind:value={player1}
					class="py-[2px] px-[2px]"
				/>
			</label>

			<label>
				Player 2:
				<input
					type="text"
					placeholder="Enter a name for Player 2: "
					bind:value={player2}
					class="py-[2px] px-[2px]"
				/>
			</label>

			<button class="bg-sky-600 text-2xl rounded-lg py-2 px-6">Start Game</button>
		</form>
	</div>
</div>
