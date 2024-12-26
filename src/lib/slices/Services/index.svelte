<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	export let slice: Content.ServicesSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-white py-12 lg:px-24 lg:py-20 flex items-center"
>
	<div class="container mx-auto">
		<div class="flex flex-col items-center text-center w-full">
			<h2 class="text-4xl lg:text-6xl lg:mb-4 font-medium text-black uppercase text-nowrap">
				Our Services
			</h2>
			<p class="py-4 text-black leading-relaxed text-base mb-2">
				Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
				farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
				heirloom.
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
			{#each slice.primary.card as item}
				<div class="p-4 flex justify-center">
					<div class="lg:w-96 lg:h-96 w-80 h-80 aspect-square relative">
						<img
							alt="gallery"
							class="absolute inset-0 w-full h-full object-cover object-center"
							src="https://dummyimage.com/600x600"
						/>
						<div
							class="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
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
			<!-- <div class="p-4 flex justify-center">
				<div class="lg:w-96 lg:h-96 w-80 h-80 aspect-square relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/600x600"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
					>
						<h3 class="title-font text-4xl font-medium text-black underline cursor-pointer mb-3">
							SERVICE
						</h3>
					</div>
				</div>
			</div>
			<div class="p-4 flex justify-center">
				<div class="lg:w-96 lg:h-96 w-80 h-80 aspect-square relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/600x600"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
					>
						<h3 class="title-font text-4xl font-medium text-black underline cursor-pointer mb-3">
							SERVICE
						</h3>
					</div>
				</div>
			</div>
			<div class="p-4 flex justify-center">
				<div class="lg:w-96 lg:h-96 w-80 h-80 aspect-square relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/600x600"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
					>
						<h3 class="title-font text-4xl font-medium text-black underline cursor-pointer mb-3">
							SERVICE
						</h3>
					</div>
				</div>
			</div>
			<div class="p-4 flex justify-center">
				<div class="lg:w-96 lg:h-96 w-80 h-80 aspect-square relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/600x600"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
					>
						<h3 class="title-font text-4xl font-medium text-black underline cursor-pointer mb-3">
							SERVICE
						</h3>
					</div>
				</div>
			</div>
			<div class="p-4 flex justify-center">
				<div class="lg:w-96 lg:h-96 w-80 h-80 aspect-square relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/600x600"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
					>
						<h3 class="title-font text-4xl font-medium text-black underline cursor-pointer mb-3">
							SERVICE
						</h3>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</section>
