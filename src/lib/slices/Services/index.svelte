<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import CustomHeading from '$lib/components/ui/CustomHeading.svelte';
	import Heading from './Heading.svelte';

	export let slice: Content.ServicesSlice;

	const components: PrismicRichText['components'] = {
		heading2: CustomHeading
	};

	const servicesTitleHover: PrismicRichText['components'] = {
		heading2: Heading
	};

	// $: if (slice.primary.card) console.log(slice.primary.card, 'slice.primary.card ');
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-white py-4 lg:px-24 lg:py-8 flex items-center mb-4"
>
	<div class="mx-auto">
		<div class="flex flex-col items-center text-center w-full">
			<h2>
				<PrismicRichText {components} field={slice.primary.title} />
			</h2>
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 items-center max-w-screen-xl mx-auto"
		>
			{#each slice.primary.card as item}
				<div class="p-1 flex justify-center">
					<div class="lg:w-100 lg:h-100 custom__size__boxes relative group">
						{#if item.image && Object.keys(item.image).length > 0}
							<PrismicImage
								class="absolute inset-0 w-full h-full object-cover object-center"
								field={item.image}
							/>
						{:else}
							<img
								alt="gallery"
								class="absolute inset-0 w-full h-full object-cover object-center"
								src="https://dummyimage.com/600x800"
							/>
						{/if}
						<div
							class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity"
						></div>
						<div class="px-4 py-6 relative z-10 w-full h-full flex items-center justify-center">
							<PrismicLink field={item.service_page_link}>
								<div
									class="text-white text-center group-hover:text-orange-300 cursor-pointer mb-3 uppercase transition-colors px-20"
								>
									<PrismicRichText field={item.title} />
								</div>
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
		width: 36rem;
		height: 17rem;
	}
</style>
