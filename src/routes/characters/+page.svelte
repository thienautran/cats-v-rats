<script>
	let loading = true;
	let voices = [];
	voices = speechSynthesis.getVoices();
	let text = 'Hello, world!';
	let voiceIndex = 0;
	$: voice = voices[voiceIndex];

	function sayIt() {
		let u = new SpeechSynthesisUtterance(text);
		u.voice = voice;
		speechSynthesis.speak(u);
	}
</script>

<div>
	<label
		>Text to say:
		<input bind:value={text} />
	</label>
	<button on:click={sayIt}>Say it</button>
</div>
