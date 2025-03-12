<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import Heading from './Heading.svelte';

	export let slice: Content.ProductInfoRightSlice;

	const components: PrismicRichText['components'] = {
		heading2: Heading
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" py-6 sm:py-8 lg:py-12"
>
	<div class="mx-auto max-w-screen-xl px-4 md:px-8 items-center flex justify-center">
		<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
			<div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
				<PrismicImage
					class="h-full w-full object-cover object-center"
					field={slice.primary.image}
				/>
			</div>

			<div class="md:pt-8">
				<!-- <p class="text-center font-bold text-indigo-500 md:text-left">
					<PrismicRichText field={slice.primary.tag} />
				</p> -->

				<PrismicRichText {components} field={slice.primary.title} />

				<p class="pb-6 text-gray-500 sm:text-lg md:pb-8">
					<PrismicRichText field={slice.primary.description} />
				</p>
			</div>
		</div>
	</div>
</section>
