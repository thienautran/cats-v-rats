<script>
	import testingBoard from '$lib/boards/testingboard.json';
	import gameBackground from '$lib/assets/game/background.svg';
	import Tile from './Tile.svelte';
</script>

<div class="flex flex-col justify-center items-center min-w-screen min-w-full">
	<div class="relative bg-black">
		<img src={gameBackground} alt="game board" class="w-[800px] h-[800px] -z-10 absolute" />
		<div class="game h-[800px] w-[800px]">
			{#each testingBoard.board as row, r}
				{#each row as piece, c}
					{#if piece === 'f' || piece === 'mouse' || piece === 'cat' || piece === 'mountain'}
						{#if piece === 'cat'}
							<Tile coordinates={[r, c]} tileType={'f'} piece={'cat'} />
						{:else if piece === 'mouse'}
							<Tile coordinates={[r, c]} tileType={'f'} piece={'mouse'} />
						{:else if piece === 'mountain'}
							<Tile coordinates={[r, c]} tileType={'f'} piece={'mountain'} />
						{:else}
							<Tile coordinates={[r, c]} tileType={'f'} piece={'none'} />
						{/if}
					{:else if piece === 'w'}
						<Tile coordinates={[r, c]} tileType={'w'} />
					{:else}
						<Tile coordinates={[r, c]} tileType={'n'} />
					{/if}
				{/each}
			{/each}
		</div>
	</div>
</div>
