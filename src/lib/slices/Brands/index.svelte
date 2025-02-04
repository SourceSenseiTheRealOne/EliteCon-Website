<script lang="ts">
	import type { Content } from '@prismicio/client';

	import CustomHeading from '$lib/components/ui/CustomHeading.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.BrandsSlice;

	const components: PrismicRichText['components'] = {
		heading2: CustomHeading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" py-4 lg:px-24 lg:py-8 flex items-center mb-4"
>
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<div class="mb-4 flex flex-col items-center gap-6 md:mb-8 lg:flex-row lg:justify-between mt-2">
			<!-- <h2 class="mb-2 text-center sm:text-3xl text-7xl font-medium title-font text-orange-500">
				Trusted by the best
			</h2> -->

			<PrismicRichText {components} field={slice.primary.title} />

			<!-- <p class="max-w-sm text-center text-gray-400 lg:text-right">
				<PrismicRichText field={slice.primary.description} />
			</p> -->
		</div>

	
			<!-- logo - start -->
			<div class="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6 my-8">
				{#each slice.primary.card as item}
					<div class="flex items-center justify-center rounded-lg p-2 bg-white h-28 sm:h-32">
						<PrismicImage class="h-full w-auto object-contain" field={item.brand_image} />
					</div>
				{/each}
			</div>
			
			<!-- logo - end -->
	
	</div>
</section>
