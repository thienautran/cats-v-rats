<script>
	import { source } from 'sveltekit-sse';
	const value = source('/test-sse').onError((event) => console.error({ event }));
</script>

<h1>
	{$value}
</h1>
