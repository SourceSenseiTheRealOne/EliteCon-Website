<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import OrangeHeading from '$lib/components/ui/OrangeHeading.svelte';

	export let slice: Content.BuildingStepsSlice;

	const components: PrismicRichText['components'] = {
		heading2: OrangeHeading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="bg-black text-white py-6 sm:py-8 lg:py-12"
>
	<div class="mx-auto text-center max-w-screen-lg px-4 md:px-8">
		{#if slice.primary.title}
			<PrismicRichText {components} field={slice.primary.title} />
		{/if}

		{#if slice.primary.description}
			<p class="mb-6 text-white text-center sm:text-lg md:mb-8">
				<PrismicRichText field={slice.primary.description} />
			</p>
		{/if}

		{#each slice.primary.section as item}
			{#if item}
				<!-- Render content for item -->
				{#if item.title}
					<h3 class="mb-2 text-xl text-center justify-center text-balance items-center font-semibold text-white sm:text-2xl md:mb-4">
						<PrismicRichText field={item.title} />
					</h3>
				{/if}

				{#if item.description}
					<p class="mb-6 text-white text-center sm:text-lg md:mb-8">
						<PrismicRichText field={item.description} />
					</p>
				{/if}

				{#if item.image}
					<div class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
						<PrismicImage class="h-full w-full object-cover object-center" field={item.image} />
					</div>
				{/if}
			{/if}
		{/each}
	</div>
</section>
