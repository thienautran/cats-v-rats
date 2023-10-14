<script>
	import wizard from '$lib/assets/game/Rats/wizard.svg';
	import fighter from '$lib/assets/game/Rats/fighter.svg';
	import dancer from '$lib/assets/game/Rats/dancer.svg';
	import mage from '$lib/assets/game/Rats/mage.svg';
	import reaper from '$lib/assets/game/Rats/reaper.svg';

	export let character;
</script>

{#if character === 'wizard'}
	<div
		class="flex flex-row justify-center items-center bg-sky-500 mx-4 my-2 px-2 py-2 rounded-md gap-2"
	>
		<img src={wizard} alt="wizard" class="h-[100px]" />
		<p>
			<b class="text-orange-500 text-xl">Ratticus Finch</b>
			<br />
			Place a wall or move one square up, left, down or right
		</p>
	</div>
{:else if character === 'fighter'}
	<div
		class="flex flex-row justify-center items-center bg-red-800 mx-4 my-2 px-2 py-2 rounded-md gap-2"
	>
		<img src={fighter} alt="fighter" class="h-[100px]" />
		<p>
			<b class="text-orange-500 text-xl">Ratthew R. Mani</b>
			<br />
			Place a wall or move one square up, left, down or right
		</p>
	</div>
{:else if character === 'dancer'}
	<div
		class="flex flex-row justify-center items-center bg-yellow-500 mx-4 my-2 px-2 py-2 rounded-md gap-2"
	>
		<img src={dancer} alt="dancer" class="h-[100px]" />
		<p>
			<b class="text-orange-500 text-xl">Rizzo Lizzo</b>
			<br />
			Place a wall or move one square up, left, down or right
		</p>
	</div>
{:else if character === 'mage'}
	<div
		class="flex flex-row justify-center items-center bg-purple-700 mx-4 my-2 px-2 py-2 rounded-md gap-2"
	>
		<img src={mage} alt="mage" class="h-[100px]" />
		<p>
			<b class="text-orange-500 text-xl">Lil' Rat</b>
			<br />
			Place a wall or move one square up, left, down or right
		</p>
	</div>
{:else if character === 'reaper'}
	<div
		class="flex flex-row justify-center items-center bg-gray-900 mx-4 my-2 px-2 py-2 rounded-md gap-2"
	>
		<img src={reaper} alt="Grim Reaper" class="h-[100px]" />
		<p>
			<b class="text-orange-500 text-xl">Grim Reaper</b>
			<br />
			Place a wall or move one square up, left, down or right
		</p>
	</div>
{/if}
