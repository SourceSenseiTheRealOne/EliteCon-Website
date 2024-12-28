<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import CustomHeading from '$lib/components/ui/CustomHeading.svelte';

	export let slice: Content.ProjectsSlice;

	const components: PrismicRichText['components'] = {
		heading2: CustomHeading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-white py-4 lg:px-24 lg:py-8 flex items-center mb-4"
>
	<div class="mx-auto">
		<div class="flex flex-col items-center text-center w-full">
			<PrismicRichText {components} field={slice.primary.title} />
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 items-center max-w-screen-xl mx-auto"
		>
			{#each slice.primary.card as item}
				<div class="p-1 flex justify-center">
					<div class="lg:w-100 lg:h-100 custom__size__boxes relative">
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
							class="px-4 py-6 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
						>
							<PrismicLink field={item.project_page_link}>
								<h3
									class="title-font text-6xl font-medium text-black underline cursor-pointer mb-3 uppercase"
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
		width: 36rem;
		height: 17rem;
	}
</style>
