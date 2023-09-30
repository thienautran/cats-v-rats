<script>
	const value = 'hello, this is a reactive value';
	let player1 = '';
	let player2 = '';

	const showName = (name) => {
		console.log(name);
	};
</script>

<div
	class="min-h-screen min-w-full bg-slate-800 text-white flex justify-center items-center flex-col text-center space-y-6 text-w-lg"
>
	<h1 class="text-3xl text-center">Welcome to the game></h1>
	<p class="text-xl text-gray-200">Before you get started please enter your game info below</p>
	<div class="flex flex-col space-x-2 my-2 justify-center items-center">
		<label for="player1">Enter a name for player 1:</label>
		<input
			type="text"
			id="player1"
			bind:value={player1}
			placeholder="Enter a name for player 1: "
			on:input={() => showName(nplayer1)}
		/>
	</div>

	<div class="flex flex-col space-x-2 my-2 justify-center items-center">
		<label for="player2">Enter a name for player 2:</label>
		<input
			type="text"
			id="player2"
			bind:value={player2}
			placeholder="Enter a name for player 2: "
			on:input={() => showName(player2)}
		/>
	</div>
	<button class="bg-sky-600 hover:bg-sky-400 px-6 py-1 rounded-lg text-2xl">Start game</button>
</div>
