<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading from './Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.TestimonialsSlice;

	const components: PrismicRichText['components'] = {
		heading2: Heading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="bg-black text-white py-4 lg:px-24 lg:py-8 flex items-center mb-2"
>
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<div class="mb-12">
			<PrismicRichText {components} field={slice.primary.title} />
		</div>

		<div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
			<!-- quote - start -->
			{#each slice.primary.card as item}
				<!-- Render content for item -->
				<div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
					<div class="text-center text-white h-full">
						<PrismicRichText field={item.testimonial} />
					</div>

					<div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
						<div
							class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14"
						>
							<PrismicImage
								class="h-full w-full object-cover object-center"
								field={item.user_image}
							/>
						</div>

						<div>
							<div class="text-center text-sm font-bold text-orange-200 sm:text-left md:text-base">
								<PrismicRichText field={item.name} />
							</div>
							<p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">
								<PrismicRichText field={item.userwork} />
							</p>
						</div>
					</div>
				</div>
			{/each}
			<!-- quote - end -->
		</div>
	</div>
</section>
