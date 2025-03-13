<script lang="ts">
	import type { Content } from '@prismicio/client';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import Heading2 from '$lib/components/ui/Heading2.svelte';

	export let slice: Content.LatestBlogsSlice;

	const components: PrismicRichText['components'] = {
		heading2: Heading2
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" py-2 lg:px-24 lg:py-8 flex items-center mb-8"
>
	<div class="mx-auto max-w-screen-6xl px-4 md:px-8">
		<!-- text - start -->
		<div class="rich-text">
			<PrismicRichText
				field={slice.primary.title}
				components={{
					heading2: Heading2
				}}
			/>
		</div>
		<!-- text - end -->

		<div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
			<!-- article - start -->
			{#each slice.primary.card as item}
				<!-- Render content for item -->
				<PrismicLink
					field={item.postlink}
					class="group relative w-full min-w-[200px] md:min-w-[300px] lg:min-w-[350px] flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96 cursor-pointer"
				>
					<a href="/blogs" class="sr-only">Navigation links for EliteCon blogs</a>
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
							<a href="/blogs" class="sr-only">Navigation links for EliteCon blogs</a>
							<span class="font-semibold text-orange-200">Read more</span>
						</PrismicLink>
					</div>
				</PrismicLink>
			{/each}
			<!-- article - end -->
		</div>
	</div>
</section>

<style>
	.rich-text {
		margin-bottom: 2rem;
		margin-top: 1rem;
	}
</style>
