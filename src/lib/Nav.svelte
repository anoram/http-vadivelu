<script lang="ts">
	import dark from '$lib/assets/static/dark.svg';
	import light from '$lib/assets/static/light.svg';

	let isDark = false;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}
	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}
</script>

<nav>
	<div class="flex justify-between items-center dark:text-white">
		<div>
			<img src="ahaan.png" alt="ahaan" class="w-20" />
		</div>
		<div>
			<p class="text-xs md:text-base">On demand HTTP Codes with images</p>
		</div>
		<div class="justify-self-end flex gap-4 items-center">
			<a href="https://github.com/anoram/http-vadivelu" target="_blank">github</a>
			<button on:click={toggleDarkMode}>
				<img src={isDark ? light : dark} alt="" class="h-4 w-4 dark:invert" />
			</button>
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
