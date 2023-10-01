<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	let player1;
	let player2;

	const handleSubmitForm = () => {
		// console.log(player1, player2);
		gameInfo.set({ player1: player1, player2: player2, gameStarted: true });
	};
</script>

<div class="flex flex-col space-y-10 text-xl justify-center items-center text-center min-h-screen">
	<div>
		<h1 class="text-4xl">Welcome to the game!</h1>

		<p class=" mb-2">Before we get started, please enter some player info below</p>
	</div>

	<form
		class="flex flex-col justify-center items-center space-y-8 mt-10"
		on:submit|preventDefault={handleSubmitForm}
	>
		<label>
			Player 1:
			<input type="text" placeholder="Enter a name for Player 1: " bind:value={player1} />
		</label>

		<label>
			Player 2:
			<input type="text" placeholder="Enter a name for Player 2: " bind:value={player2} />
		</label>

		<button class="bg-sky-600 text-2xl rounded-lg py-2 px-6">Start game</button>
	</form>
</div>
