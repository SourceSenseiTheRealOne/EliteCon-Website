<script lang="ts">
	import { asText, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
	import { tick } from 'svelte';

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
	let swiper;

	// Function to open the gallery modal with relevant video and images
	// function toggleGallery(e) {
	// selectedVideo = item.videolink
	// 	? Array.isArray(item.videolink)
	// 		? asText(item.videolink)
	// 		: item.videolink
	// 	: null;
	// selectedImages = [item.image, item.image2, item.image3].filter(Boolean);
	// 	showGalleryModal = !showGalleryModal;
	// }

	function toggleGallery(e) {
		showGalleryModal = !showGalleryModal;

		if (showGalleryModal) {
			// Wait for the DOM to update
			tick().then(() => {
				swiper = new Swiper('.mySwiper', {
					modules: [Navigation, Pagination],
					navigation: true,
					spaceBetween: 10,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				});

				// Initialize the thumbnail Swiper
				new Swiper('.mySwiper2', {
					modules: [Navigation, Pagination],
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesProgress: true
				});
			});
		}
	}
	function closeGalleryModal() {
		if (swiper) {
			swiper.destroy();
			swiper = null;
		}
		showGalleryModal = false;
	}

	$: console.log('showGalleryModal:', showGalleryModal);

	$: if (slice.primary) console.log(slice.primary, 'slice.primary.videolink');

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
	<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
</svelte:head>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-6 sm:py-8 lg:py-12 mb-8 items-center"
>
	<PrismicRichText {components} field={slice.primary.title} />

	{#if slice.primary.videolink && slice.primary.videolink.length > 0}
		<!-- Centered Video -->
		<div class="flex justify-center items-center mb-6 mx-auto max-w-6xl px-4">
			<video
				class="w-full h-auto object-cover rounded-lg shadow-lg"
				src={Array.isArray(slice.primary.videolink)
					? asText(slice.primary.videolink)
					: slice.primary.videolink}
				autoplay
				muted
				loop
				controls
			></video>
		</div>
	{:else if slice.primary.mainimage}
		<div
			class="flex justify-center items-center mb-6 mx-auto max-w-6xl px-4"
			on:click={(e) => toggleGallery(e)}
		>
			<PrismicImage
				class="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer"
				field={slice.primary.mainimage}
			/>
		</div>
	{/if}

	{#if slice.primary.imggallery && slice.primary.imggallery.length > 0}
		<!-- Images Grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-6xl px-4"
			on:click={(e) => toggleGallery(e)}
		>
			{#each slice.primary.imggallery as item}
				<PrismicImage
					class="w-full h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
					field={item.image}
				/>
			{/each}
		</div>
	{/if}
</section>

{#if showGalleryModal}
	<div class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
		<div
			class="relative w-[800px] h-auto max-w-4xl bg-slate-100 bg-opacity-65 rounded-lg px-8 py-16"
		>
			<!-- <button
				class="absolute top-2 right-2 text-white bg-yellow-600 rounded-full px-2.5 py-0.5 text-lg text-center font-bold"
				on:click={closeGalleryModal}
			>
				&times;
			</button> -->

			<button
				class=" absolute top-2 right-2 rounded-full group flex items-center justify-center focus-within:outline-red-500"
				on:click={closeGalleryModal}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 28 28"
					><path
						fill="#9B5F3E"
						color="#9B5F3E"
						d="M18.28 9.72a.75.75 0 0 1 0 1.06L15.06 14l3.22 3.22a.75.75 0 1 1-1.06 1.06L14 15.06l-3.22 3.22a.75.75 0 1 1-1.06-1.06L12.94 14l-3.22-3.22a.75.75 0 1 1 1.06-1.06L14 12.94l3.22-3.22a.75.75 0 0 1 1.06 0M26 14c0-6.627-5.373-12-12-12S2 7.373 2 14s5.373 12 12 12s12-5.373 12-12M3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14S19.799 24.5 14 24.5S3.5 19.799 3.5 14"
					/></svg
				>
			</button>

			<div class="w-full relative">
				<div class="swiper default-carousel">
					<div class="swiper-wrapper">
						<swiper-container
							style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
							class="mySwiper"
							thumbs-swiper=".mySwiper2"
							space-between="10"
							navigation="true"
						>
							{#each slice.primary.imggallery as item}
								<swiper-slide>
									<PrismicImage
										class="w-full h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
										field={item.image}
									/>
								</swiper-slide>
							{/each}
							<!-- <swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
							</swiper-slide> -->
						</swiper-container>

						<swiper-container
							class="mySwiper2"
							space-between="10"
							slides-per-view="6"
							free-mode="true"
							watch-slides-progress="true"
						>
							{#each slice.primary.imggallery as item}
								<swiper-slide>
									<PrismicImage
										class="w-full h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
										field={item.image}
									/>
								</swiper-slide>
							{/each}
							<!-- <swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
							</swiper-slide>
							<swiper-slide>
								<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
							</swiper-slide> -->
						</swiper-container>
					</div>
					<!-- <div class="swiper-pagination"></div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div> -->
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* .swiper-wrapper {
		width: 100%;
		height: max-content !important;
		padding-bottom: 64px !important;
		-webkit-transition-timing-function: linear !important;
		transition-timing-function: linear !important;
		position: relative;
	}
	.swiper-pagination-bullet { 
		background: #4f46e5;
	} */

	swiper-container {
		width: 100%;
		height: 100%;
	}

	swiper-slide {
		text-align: center;
		font-size: 18px;
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
	}

	swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	swiper-container {
		width: 100%;
		height: 300px;
		margin-left: 0;
		margin-right: 0;
	}

	swiper-slide {
		background-size: cover;
		background-position: center;
	}

	.mySwiper {
		height: 80%;
		width: 100%;
	}

	.mySwiper2 {
		height: 20%;
		box-sizing: border-box;
		padding: 1px 0;
	}

	.mySwiper2 swiper-slide {
		width: 25%;
		height: 100%;
		opacity: 0.4;
	}

	.mySwiper2 .swiper-slide-thumb-active {
		opacity: 1;
	}

	swiper-slide img {
		display: block;
		width: 70%;
		height: 70%;
		object-fit: cover;
	}
</style>
