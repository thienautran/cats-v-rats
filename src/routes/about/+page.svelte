<script>
	import { source } from 'sveltekit-sse';
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import GameBoard from '$lib/components/GameBoard.svelte';

	// const value = source('/test-sse').onError((event) => console.error({ event }));
	let test = source('/test-sse');
	$: reactiveValue = $test;

	function updateTester() {
		gameInfo.update((gameState) => {
			let board = gameState.gameBoard;
			board[0][0] = reactiveValue;

			return { ...gameState, gameBoard: board };
		});
	}

	setInterval(updateTester, 1000);
</script>

<h2>
	testing second event: {reactiveValue}
</h2>
<h3>
	{$gameInfo.maps}
</h3>

<GameBoard />
