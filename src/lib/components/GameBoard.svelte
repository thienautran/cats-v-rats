<script>
	import { gameInfo } from '$lib/stores/GameInfoStore.js';
	import { fade } from 'svelte/transition';
	import Tile from './Tile.svelte';

	let board = [
		['mouse', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'mouse'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'cat', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f'],
		['w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
		['mouse', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'f', 'w', 'mouse']
	];
</script>

<div
	transition:fade={{ delay: 1000, duration: 2500 }}
	class="min-h-screen flex justify-center items-center"
>
	<div
		tabindex="0"
		role="gameboard"
		aria-label="game board"
		class="h-vw-5 w-vw-5 bg-black flex flex-row justify-center items-center flex-wrap"
	>
		{#each board as row, r}
			{#each row as piece, c}
				{#if piece === 'f' || piece === 'mouse' || piece === 'cat'}
					<Tile value={[r, c]} tileType={'f'} />
				{:else if piece === 'w' && r % 2 !== 0 && c % 2 === 0}
					<Tile value={[r, c]} tileType={'w'} orientation={'h'} />
				{:else if piece === 'w' && r % 2 === 0 && c % 2 !== 0}
					<Tile value={[r, c]} tileType={'w'} orientation={'v'} />
				{:else}
					<Tile value={[r, c]} tileType="n" />
				{/if}
			{/each}
		{/each}
	</div>
</div>
