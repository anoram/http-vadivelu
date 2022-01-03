<script>
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.postcss';
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss">
	main {
		@apply p-8 mx-auto;
		max-width: 1024px;
	}
</style>
