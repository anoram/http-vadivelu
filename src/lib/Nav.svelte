<script lang="ts">
	import dark from '$lib/assets/static/dark.svg';
	import light from '$lib/assets/static/light.svg';

	let theme = true; // true = light, false = dark
	$: currentTheme = theme === true ? dark : light;
</script>

<nav>
	<div class="flex justify-between items-center dark:text-white">
		<div>
			<img src="ahaan.png" alt="ahaan" class="w-20" />
		</div>
		<div>
			<p>On demand HTTP Codes with images</p>
		</div>
		<div class="justify-self-end flex gap-4 items-center">
			<a href="https://github.com/anoram/http-vadivelu" target="_blank">github</a>
			<img src={currentTheme} alt="" class="h-4 w-4 dark:invert" on:click={() => (theme = !theme)} />
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply px-4 py-2;
	}
	a {
		@apply text-sm;
	}
	img {
		@apply cursor-pointer;
	}
</style>
