<script lang="ts">
	import { asText, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	import Heading from './Heading.svelte';

	export let slice: Content.PortfolioSlice;

	const components: PrismicRichText['components'] = {
		heading2: Heading
	};

	let videoLink: string | null = null;
	$: {
		slice.primary.card.forEach((item) => {
			if (item.videolink) {
				videoLink = Array.isArray(item.videolink) ? asText(item.videolink) : item.videolink;
			}
		});
	}
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-6 sm:py-8 lg:py-12 mb-8"
>
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<PrismicRichText {components} field={slice.primary.title} />

		<!-- Video section -->
		<div class="mb-6">
			{#if videoLink}
				<div class="w-full">
					<video
						class="w-full h-auto object-cover rounded-lg shadow-lg"
						src={videoLink}
						autoplay
						muted
						loop
					></video>
				</div>
			{/if}
		</div>

		<!-- Images section -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
			{#each slice.primary.card as item}
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
				<div>
					<PrismicLink
						class="group cursor-pointer relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
						field={item.link}
					>
						<PrismicImage
							class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							field={item.image2}
						/>

						<div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
							<span class="text-gray-500"><PrismicRichText field={item.description} /></span>
							<span class="text-lg font-bold text-gray-800 lg:text-xl"
								><PrismicRichText field={item.title} /></span
							>
						</div>
					</PrismicLink>
				</div>
				<div>
					<PrismicLink
						class="group cursor-pointer relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
						field={item.link}
					>
						<PrismicImage
							class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							field={item.image3}
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
		</div>
	</div>
</section>
