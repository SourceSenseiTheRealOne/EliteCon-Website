<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	import Heading from './Heading.svelte';

	export let slice: Content.HeroSlice;
</script>

<section
	class="relative flex h-screen flex-col items-center justify-center text-center text-white"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
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

	<!-- Black overlay -->
	<div class="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>

	<div class="video-content z-40 space-y-2">
		<h1 class="text-6xl font-light mb-12">Luxury Outdoor Spaces</h1>
		<button
			class="flex-shrink-0 text-white bg-orange-500 border-0 shadow-sm py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg mt-10 sm:mt-0"
			>Let's talk about your project</button
		>
	</div>
</section>
