<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.ProjectsSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-12 lg:px-24 lg:py-20"
>
	<h2 class="text-4xl text-nowrap lg:text-6xl mb-6 lg:mb-16 font-medium title-font text-black text-center">
		Featured Projects
	</h2>

	<div class="flex flex-wrap justify-center gap-6 items-center">
		<div class="flex justify-center lg:block lg:w-1/3 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/3 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/5 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/3 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/3 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/5 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/3 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/3 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	<div class="flex justify-center lg:block lg:w-1/5 md:w-1/2 flex-col p-4 w-full">
			<a class="block relative lg:h-80 h-72 rounded overflow-hidden aspect-square">
				<img
					alt="ecommerce"
					class="object-cover object-center w-full h-full block"
					src="https://dummyimage.com/600x600"
				/>
			</a>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
				<h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
				<p class="mt-1">Description</p>
			</div>
		</div>
	</div>
</section>
