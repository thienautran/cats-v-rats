<script>
	import stone from '$lib/assets/game/Walls/stone.svg';
	import stonehorizontal from '$lib/assets/game/Walls/stonehorizontal.svg';
	import mountain from '$lib/assets/game/rock.svg';

	// characters
	import wizard from '$lib/assets/game/Rats/wizard.svg';
	import fighter from '$lib/assets/game/Rats/fighter.svg';
	import dancer from '$lib/assets/game/Rats/dancer.svg';
	import mage from '$lib/assets/game/Rats/mage.svg';
	import reaper from '$lib/assets/game/Rats/reaper.svg';

	// provide the props of either "w", "f", or "n"
	export let tileType;
	export let piece; // can have cat or mouse
	export let coordinates;
</script>

{#if tileType === 'f'}
	<div
		role="gridcell"
		aria-label="game tile"
		class="flex justify-center items-center border-solid border-[#c28149] border-2"
	>
		{#if piece === 'reaper'}
			<div class="h-[75%] w-[75%]">
				<img src={reaper} alt="Grim Reaper" />
			</div>
		{:else if piece === 'wizard'}
			<div class="h-[75%] w-[75%] flex flex-col justify-center items-center">
				<img src={wizard} alt="wizard rat" class="w-full" />
			</div>
		{:else if piece === 'fighter'}
			<div class="h-[75%] w-[75%] flex flex-col justify-center items-center">
				<img src={fighter} alt="fighter rat" class="w-full" />
			</div>
		{:else if piece === 'dancer'}
			<div class="h-[75%] w-[75%] flex flex-col justify-center items-center">
				<img src={dancer} alt="dancer rat" class="w-full" />
			</div>
		{:else if piece === 'mage'}
			<div class="h-[75%] w-[75%] flex flex-col justify-center items-center">
				<img src={mage} alt="mage rat" class="w-full" />
			</div>
		{:else if piece === 'mountain'}
			<div class="h-[75%] w-[75%]">
				<img src={mountain} alt="rock" class=" w-full" />
			</div>
		{/if}
	</div>

	<!-- empty tile -->
{:else if tileType === 'n'}
	<div class="empty" />

	<!-- virtical wall -->
{:else if tileType === 'w' && coordinates[0] % 2 === 0}
	<div class="flex justify-center items-center">
		<img src={stone} alt="stone wall" class="h-full" />
	</div>

	<!-- horizontal wall -->
{:else if tileType === 'w' && coordinates[0] % 2 !== 0}
	<div class="flex justify-center items-center">
		<img src={stonehorizontal} alt="stone wall" class="w-full" />
	</div>
{/if}
