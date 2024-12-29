<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	import Heading from './Heading.svelte';

	export let slice: Content.PortfolioSlice;

	const components: PrismicRichText['components'] = {
		heading2: Heading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" py-6 sm:py-8 lg:py-12"
>
<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<PrismicRichText {components} field={slice.primary.title} />
		<div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
			<!-- product - start -->
			{#each slice.primary.card as item}
				<!-- Render content for item -->
				<div>
					<PrismicLink
						class="group cursor-pointer relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
						field={item.link}
					>
						<PrismicImage
							class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							field={item.image}
						/>

						<div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
							<span class="text-gray-500"><PrismicRichText field={item.description} /></span>
							<span class="text-lg font-bold text-gray-800 lg:text-xl"
								><PrismicRichText field={item.title} /></span
							>
						</div>
					</PrismicLink>
				</div>
			{/each}
			<!-- product - end -->
		</div>
	</div>
</section>
