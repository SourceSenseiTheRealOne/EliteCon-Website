<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	import Heading from './Heading.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';

	export let slice: Content.HeroSlice;

	let isBgImageFound = false;

	$: if (slice.primary.backgroundImage) {
		isBgImageFound = Object.keys(slice.primary.backgroundImage).length > 0;
	}

	console.log(slice.primary.backgroundImage, 'slice.primary.backgroundImage');
</script>

<section
	class="relative flex h-screen flex-col items-center justify-center text-center text-white"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if isBgImageFound}
		<div class="absolute left-0 top-0 h-full w-full overflow-hidden">
			<PrismicImage
				class="absolute min-h-full min-w-full object-cover"
				field={slice.primary.backgroundImage}
			/>
		</div>
	{:else}
		<div class="video-docker absolute left-0 top-0 h-full w-full overflow-hidden">
			<video
				class="absolute min-h-full min-w-full object-cover"
				src="https://cdn.pixabay.com/video/2024/05/08/211152_large.mp4"
				type="video/mp4"
				autoplay
				muted
				loop
			></video>
		</div>
	{/if}

	<!-- Black overlay -->
	<div class="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>

	<div class="video-content z-40 space-y-2">
		<!-- <h1 class="text-6xl font-light mb-12">Luxury Outdoor <span class="text-orange-200">Spaces</span></h1> -->
		<h1 class="text-6xl font-light mb-12"><PrismicRichText field={slice.primary.text} /></h1>
		<ButtonLink class="cursor-pointer">{slice.primary.buttonText}</ButtonLink>
		<!-- <button
			class="flex-shrink-0 text-white bg-orange-500 border-0 shadow-lg py-2 px-4 focus:outline-none hover:bg-orange-600 rounded-xl text-md mt-10 sm:mt-0"
			>Let's talk about your project</button
		> -->
	</div>
</section>
