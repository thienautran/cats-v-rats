<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import PlayerInfoForm from '$lib/components/PlayerInfoForm.svelte';
</script>

{#if !$gameInfo.gameStarted}
	<PlayerInfoForm />
{:else}
	<p>
		players: {$gameInfo.player1}
		{$gameInfo.player2}
		game has started: {$gameInfo.gameStarted}
	</p>
{/if}
