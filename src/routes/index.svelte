<script lang="ts">
	import Cards from '$lib/Cards.svelte';
	import Instructions from '$lib/Instructions.svelte';
	import { codes } from './data.json';
</script>

<Instructions />

<Cards {codes} />
