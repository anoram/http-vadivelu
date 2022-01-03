<script lang="ts">
	import { base } from '$app/paths';

	export let codes;
</script>

<div class="grid grid-cols-3 gap-4 py-8 ">
	{#each codes as { code, desc, type, file }}
		<a href={`${base}/${type[0]}/${file}.${type[0]}`} target="_blank">
			<div class="card dark:bg-gray-900 dark:text-white">
				<div class="overflow-y-hidden h-40 w-full">
					<img
						src={`/${type[0] === 'gif' ? 'gif' : 'jpg'}/${file}.${
							type[0] === 'gif' ? 'gif' : 'jpg'
						}`}
						alt={`${code}`}
						class="w-full h-full object-fit object-top"
					/>
				</div>
				<div class="card-body flex p-2 justify-between">
					<p class="font-medium">{desc}</p>
					<p class="text-pink-600 text-light">{type}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style lang="postcss">
	.card {
		@apply rounded shadow;
	}
</style>
