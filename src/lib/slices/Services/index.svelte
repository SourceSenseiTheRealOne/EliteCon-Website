<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	export let slice: Content.ServicesSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-white py-12 lg:px-24 lg:py-24 flex items-center mb-12"
>
	<div class="container mx-auto">
		<div class="flex flex-col items-center text-center w-full">
			<h2 class="text-4xl lg:text-6xl lg:mb-12 mb-4 font-medium text-black uppercase text-nowrap">
				Our Services
			</h2>
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 items-center max-w-screen-xl mx-auto"
		>
			{#each slice.primary.card as item}
				<div class="p-1 flex justify-center">
					<div class="lg:w-100 lg:h-100 custom__size__boxes aspect-square relative">
						<img
							alt="gallery"
							class="absolute inset-0 w-full h-full object-cover object-center"
							src="https://dummyimage.com/600x600"
						/>
						<div
							class="px-4 py-6 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
						>
							<PrismicLink field={item.service_page_link}>
								<h3
									class="title-font text-4xl font-medium text-black underline cursor-pointer mb-3"
								>
									<PrismicRichText field={item.title} />
								</h3>
							</PrismicLink>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.custom__size__boxes {
		width: 28rem;
		height: 22rem;
	}
</style>
