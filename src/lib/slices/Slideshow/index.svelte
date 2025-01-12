<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	export let slice: Content.SlideshowSlice;

	// core version + navigation, pagination modules:
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';
	// import Swiper and modules styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	let swiperInstance;

	onMount(() => {
		// Initialize Swiper instance
		swiperInstance = new Swiper('.default-carousel', {
			modules: [Navigation, Pagination],
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet" />
	<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</svelte:head>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="my-12 px-44">
	<h2 class="text-center my-6">
		<PrismicRichText field={slice.primary.title} />
	</h2>

	<div class="w-full relative">
		<div class="swiper default-carousel">
			<div class="swiper-wrapper">
				{#each slice.primary.slideshow as item}
					<div class="swiper-slide">
						<div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
							<PrismicImage field={item.image} />
						</div>
					</div>
				{/each}
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
</section>

<style>
	.swiper-wrapper {
		width: 100%;
		height: max-content !important;
		padding-bottom: 64px !important;
		-webkit-transition-timing-function: linear !important;
		transition-timing-function: linear !important;
		position: relative;
	}
	.swiper-pagination-bullet {
		background: #4f46e5;
	}
</style>
