<script lang="ts">
	import type { Content } from '@prismicio/client';

	import CustomHeading from '$lib/components/ui/CustomHeading.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	export let slice: Content.BrandsSlice;

	const components: PrismicRichText['components'] = {
		heading2: CustomHeading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-4 lg:px-24 lg:py-8 flex flex-col items-center text-center w-full"
>
	<Bounded as="section" yPadding="sm">
		<div class="mx-auto w-full max-w-6xl px-4 md:px-8">
			<!-- Title Section -->
			<div class="mb-4 flex flex-col items-center gap-6 md:mb-8 lg:flex-col text-center">
				<PrismicRichText
					{components}
					field={slice.primary.title}
			
				/>
			</div>

			<!-- Brand Images Grid -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 my-8 justify-center"
			>
				{#each slice.primary.card as item}
					<div class="flex items-center justify-center rounded-lg p-2 bg-white h-28 sm:h-32 w-full">
						<PrismicImage
							class="h-full w-auto max-w-full object-contain"
							field={item.brand_image}
						/>
					</div>
				{/each}
			</div>
		</div>
	</Bounded>
</section>
