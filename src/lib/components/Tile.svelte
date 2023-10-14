<script>
	import fence from '$lib/assets/game/Walls/fence.svg';
	import fencehorizontal from '$lib/assets/game/Walls/fencehorizontal.svg';
	import wizard from '$lib/assets/game/Rats/fighter.svg';
	import reaper from '$lib/assets/game/Rats/reaper.svg';

	// provide the props of either "w", "f", or "n"
	export let tileType;
	// can be v virtical, or h horizontal
	export let orientation;
	export let piece; // can have cat or mouse
	export let value;
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
{:else if tileType === 'w' && orientation === 'v'}
	<div class=" h-[11.76%] w-[2.94%]">
		<img src={fence} alt="fence wall tile" class="w-full m-0 p-0" />
	</div>
{:else if tileType === 'w' && orientation === 'h'}
	<div class="h-[2.94%] w-[11.76%]">
		<img src={fencehorizontal} alt="fence wall tile" class="w-full m-0 p-0" />
	</div>
{:else}
	<div class="h-[2.94%] w-[2.94%]" />
{/if}
