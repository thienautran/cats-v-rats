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
		class="flex flex-row justify-center items-center bg-sky-500 mx-4 my-2 px-2 py-2 rounded-md gap-2 w-550"
	>
		<img src={wizard} alt="wizard" class="h-[100px]" />
		<p>
			<b class="text-blue-800 text-xl">Ratticus Finch</b>
			<br />
			Can add one turn to counter.
		</p>
	</div>
{:else if character === 'fighter'}
	<div
		class="flex flex-row justify-center items-center bg-red-500 mx-4 my-2 px-2 py-2 rounded-md gap-2 w-550"
	>
		<img src={fighter} alt="fighter" class="h-[100px]" />
		<p>
			<b class="text-rose-800 text-xl">Ratthew R. Mani</b>
			<br />
			Can hop walls (excluding <br /> built walls and mountains).
		</p>
	</div>
{:else if character === 'dancer'}
	<div
		class="flex flex-row justify-center items-center bg-yellow-500 mx-4 my-2 px-2 py-2 rounded-md gap-2 w-550"
	>
		<img src={dancer} alt="dancer" class="h-[100px]" />
		<p>
			<b class="text-amber-800 text-xl">Rizzo Lizzo</b>
			<br />
			Can move diagonally.
		</p>
	</div>
{:else if character === 'mage'}
	<div
		class="flex flex-row justify-center items-center bg-pink-500 mx-4 my-2 px-2 py-2 rounded-md gap-2 w-550"
	>
		<img src={mage} alt="mage" class="h-[100px]" />
		<p>
			<b class="text-fuchsia-800 text-xl">Lil' Rat</b>
			<br />
			Can build 1 wall (that cannot be <br /> hopped and only lasts 1 turn.)
		</p>
	</div>
{:else if character === 'reaper'}
	<div
		class="flex flex-row justify-center items-center bg-gray-900 mx-4 my-2 px-2 py-2 rounded-md gap-2 w-550"
	>
		<img src={reaper} alt="Grim Reaper" class="h-[100px]" />
		<p>
			<b class="text-orange-500 text-xl">Grim Reaper</b>
			<br />
			Can absorb any rat's <br /> abilities (which stay for the <br /> remainder of the game).
		</p>
	</div>
{/if}
