<script lang="ts">
	import type { Content } from '@prismicio/client';
	import CustomHeading from '$lib/components/ui/CustomHeading.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	export let slice: Content.LatestBlogsSlice;

	const components: PrismicRichText['components'] = {
		heading2: CustomHeading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" py-4 lg:px-24 lg:py-8 flex items-center mb-6"
>
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<!-- text - start -->
		<div class="mb-8 md:mb-16 text-center">
			<PrismicRichText {components} field={slice.primary.title} />

			<p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
				<PrismicRichText field={slice.primary.description} />
			</p>
		</div>
		<!-- text - end -->

		<div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
			<!-- article - start -->
			{#each slice.primary.card as item}
				<!-- Render content for item -->
				<a
					href="#"
					class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
				>
					<PrismicImage
						class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						field={item.image}
					/>

					<div
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"
					></div>

					<div class="relative mt-auto p-4">
						<span class="block text-sm text-gray-200"
							><PrismicRichText field={item.description} /></span
						>
						<h2 class="mb-2 text-xl font-semibold text-white transition duration-100">
							<PrismicRichText field={item.title} />
						</h2>

						<PrismicLink field={item.postlink}>
							<span class="font-semibold text-orange-200">Read more</span>
						</PrismicLink>
					</div>
				</a>
			{/each}
			<!-- article - end -->
		</div>
	</div>
</section>
