<script>
	import fence from '$lib/assets/game/Walls/fence.svg';
	import fencehorizontal from '$lib/assets/game/Walls/fencehorizontal.svg';
	import wizard from '$lib/assets/game/Rats/fighter.svg';

	import reaper from '$lib/assets/game/Rats/reaper.svg';

	// provide the props of either "w", "f", or "n"
	export let tileType;
	export let piece; // can have cat or mouse
	export let coordinates;
</script>

{#if tileType === 'f'}
	<div
		role="game tile"
		aria-label="game tile"
		tabindex="0"
		class="h-[11.76%] w-[11.76%] flex justify-center items-center"
	>
		{#if piece === 'cat'}
			<div class="h-[75%] w-[95%]">
				<img src={reaper} alt="cat" />
			</div>
		{:else if piece === 'mouse'}
			<div class="h-[75%] w-[95%]">
				<img src={wizard} alt="wizard rat" />
			</div>
		{/if}
	</div>

	<!-- horizontal not wall -->
{:else if tileType === 'n' && coordinates[0] % 2 !== 0 && coordinates[1] % 2 === 0}
	<div class="h-[2.94%] w-[11.76%]" />

	<!-- nothing square -->
{:else if tileType === 'n' && coordinates[0] % 2 !== 0 && coordinates[1] % 2 !== 0}
	<div class="h-[2.94%] w-[2.94%]" />

	<!-- virtical not wall -->
{:else if tileType === 'n' && coordinates[0] % 2 === 0}
	<div class="h-[11.76%] w-[2.94%]" />

	<!-- virtical wall -->
{:else if tileType === 'w' && coordinates[0] % 2 === 0}
	<div class="h-[11.76%] w-[2.94%]">
		<img src={fence} alt="fence wall tile" class="h-full" />
	</div>

	<!-- horizontal wall -->
{:else if tileType === 'w' && coordinates[0] % 2 !== 0}
	<div class="h-[2.94%] w-[11.76%]">
		<img src={fencehorizontal} alt="fence wall tile" class="w-full" />
	</div>
{/if}
