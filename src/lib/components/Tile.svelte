<script>
	// provide the props of either "w", "f", or "n"
	export let tileType;
	// can be v virtical, or h horizontal
	export let orientation;
	export let piece; // can have cat or mouse
</script>

{#if tileType === 'f'}
	<div
		role="game tile"
		aria-label="game tile"
		tabindex="0"
		class="bg-sky-900 h-[11.76%] w-[11.76%] flex justify-center items-center"
	>
		{#if piece === 'cat'}
			<div class="bg-red-600 h-[75%] w-[75%]">cat</div>
		{:else if piece === 'mouse'}
			<div class="bg-blue-600 h-[75%] w-[75%]">rat</div>
		{/if}
	</div>
{:else if tileType === 'w' && orientation === 'v'}
	<div class="bg-green-500 h-[11.76%] w-[2.94%]" />
{:else if tileType === 'w' && orientation === 'h'}
	<div class="bg-green-500 h-[2.94%] w-[11.76%]" />
{:else}
	<div class="h-[2.94%] w-[2.94%]" />
{/if}
