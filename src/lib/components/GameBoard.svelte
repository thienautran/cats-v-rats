<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import { fade } from 'svelte/transition';
	import Tile from './Tile.svelte';
	import Wall from './Wall.svelte';
	let tiles = [1, 2, 3, 4, 5, 6, 7];
	let walls = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'];
	let board = ['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'];
</script>

<div
	transition:fade={{ delay: 1000, duration: 2500 }}
	class="min-h-screen flex justify-center items-center"
>
	<div class="h-vw-5 w-vw-5 bg-black flex flex-row justify-center items-center">
		{#each board as piece, index}
			{#if piece === 'f'}
				<Tile value={index} />
			{:else}
				<Wall value={index} />
			{/if}
		{/each}
	</div>
</div>
