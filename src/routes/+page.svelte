<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import PlayerInfoForm from '$lib/components/PlayerInfoForm.svelte';
	import GameBoard from '../lib/components/GameBoard.svelte';
</script>

{#if !$gameInfo.gameStarted}
	<PlayerInfoForm />
{:else}
	<GameBoard />
{/if}
