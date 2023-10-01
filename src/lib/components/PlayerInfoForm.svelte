<script>
	let player1;
	let player2;

	const handleSubmitForm = () => {
		console.log(player1, player2);
	};
</script>

<div class="flex flex-col space-y-4 text-xl justify-center items-center text-center">
	<h1 class="text-4xl">Welcome to the game!</h1>

	<p>Before we get started, please enter some player info below</p>

	<form
		class="flex flex-col justify-center items-center space-y-2 mt-10"
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

		<button class="bg-sky-600 text-2xl rounded-lg py-2 px-6 mt-20">Start game</button>
	</form>
</div>
