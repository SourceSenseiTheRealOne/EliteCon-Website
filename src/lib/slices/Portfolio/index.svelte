<script lang="ts">
	import { asText, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	import Heading from './Heading.svelte';

	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';
	// import Swiper and modules styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	import { onMount } from 'svelte';

	export let slice: Content.PortfolioSlice;

	const components: PrismicRichText['components'] = {
		heading2: Heading
	};

	let showGalleryModal = false;
	let selectedImages = [];
	let selectedVideo = null;

	let swiperInstance;

	// Function to open the gallery modal with relevant video and images
	function openGallery(item) {
		selectedVideo = item.videolink
			? Array.isArray(item.videolink)
				? asText(item.videolink)
				: item.videolink
			: null;
		selectedImages = [item.image, item.image2, item.image3].filter(Boolean); // Filter out null or undefined images
		showGalleryModal = true;
	}

	function closeGalleryModal() {
		showGalleryModal = false;
	}

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

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-6 sm:py-8 lg:py-12 mb-8"
>
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<!-- Iterate over each section -->
		{#each slice.primary.card as item}
			<!-- Section Title -->
			<div class="mb-12 text-center">
				<PrismicRichText {components} field={item.title} />
			</div>

			<!-- Video Section -->
			{#if item.videolink}
				<div class="mb-6">
					<video
						class="w-full h-auto object-cover rounded-lg shadow-lg"
						src={Array.isArray(item.videolink) ? asText(item.videolink) : item.videolink}
						autoplay
						muted
						loop
						on:click={() => openGallery(item)}
					></video>
				</div>
			{/if}

			<!-- Images Section -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
				<!-- Image 1 -->
				<div on:click={() => openGallery(item)}>
					<PrismicImage
						class="w-full h-auto object-cover rounded-lg shadow-lg"
						field={item.image}
					/>
				</div>

				<!-- Image 2 -->
				<div on:click={() => openGallery(item)}>
					<PrismicImage
						class="w-full h-auto object-cover rounded-lg shadow-lg"
						field={item.image2}
					/>
				</div>

				<!-- Image 3 -->
				<div on:click={() => openGallery(item)}>
					<PrismicImage
						class="w-full h-auto object-cover rounded-lg shadow-lg"
						field={item.image3}
					/>
				</div>
			</div>
		{/each}
	</div>
</section>

{#if showGalleryModal && selectedImages.length > 0}
	<!-- Modal with Dark Backdrop -->
	<div class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
		<div class="relative w-full max-w-4xl bg-white rounded-lg p-6">
			<!-- Close Button -->
			<button
				class="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
				on:click={closeGalleryModal}
			>
				&times;
			</button>

			<div class="w-full relative">
				<div class="swiper default-carousel">
					<div class="swiper-wrapper">
						<!-- Show video if available -->
						{#if selectedVideo}
							<div class="swiper-slide">
								<div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
									<video
										src={selectedVideo}
										autoplay
										muted
										loop
										class="w-full h-auto object-cover rounded-lg shadow-lg"
									></video>
								</div>
							</div>
						{/if}

						<!-- Show selected images -->
						{#each selectedImages as image}
							<div class="swiper-slide">
								<div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
									<PrismicImage field={image} />
								</div>
							</div>
						{/each}
					</div>
					<div class="swiper-pagination"></div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
		</div>
	</div>
{/if}

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
