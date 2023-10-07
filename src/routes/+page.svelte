<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import PlayerInfoForm from '$lib/components/PlayerInfoForm.svelte';
	import GameBoard from '../lib/components/GameBoard.svelte';
</script>

{#if !$gameInfo.gameStarted}
	<PlayerInfoForm />
{:else}
	<h1>The game has started</h1>
	<GameBoard />
{/if}
