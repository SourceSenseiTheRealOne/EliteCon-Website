<script lang="ts">
	import { asText, isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';

	export let slice: Content.HeroSlice;

	import emailjs from '@emailjs/browser';

	let isBgImageFound = false;

	$: if (slice.primary.backgroundImage) {
		console.log(slice.primary.backgroundImage.alt)
		isBgImageFound = Object.keys(slice.primary.backgroundImage).length > 0;
	}

	// Extract video link as a string (handles RichTextField case)
	let videoLink: string | null = null;
	$: {
		if (slice.primary.videolink) {
			videoLink = Array.isArray(slice.primary.videolink)
				? asText(slice.primary.videolink)
				: slice.primary.videolink;
		}
	}

	let isContactModalOpen = false;

	const toggleContactModal = () => {
		isContactModalOpen = !isContactModalOpen;
	};

	let name = '';
	let email = '';
	let message = '';

	const sendEmail = async () => {
		const serviceID = 'info@elitecon.ca';
		const templateID = 'template_qrug1bj';
		const userID = 'jlGy-a_PB1VUcaK1J';

		const templateParams = {
			name,
			email,
			message
		};

		try {
			const response = await emailjs.send(serviceID, templateID, templateParams, userID);
			alert('Email sent successfully!');
			// console.log('EmailJS Response:', response);

			// Reset form fields
			name = '';
			email = '';
			message = '';
			toggleContactModal();
		} catch (error) {
			console.error('EmailJS Error:', error);
			alert('Failed to send email. Please try again.');
		}
	};
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
				alt={slice.primary.backgroundImage.alt}
				field={slice.primary.backgroundImage}
			/>
		</div>
	{:else if videoLink}
		<div class="video-docker absolute left-0 top-0 h-full w-full overflow-hidden">
			<video class="absolute min-h-full min-w-full object-cover" src={videoLink} autoplay muted loop
			></video>
		</div>
	{:else}
		<div class="video-docker absolute left-0 top-0 h-full w-full overflow-hidden">
			<video
				class="absolute min-h-full min-w-full object-cover"
				src="https://res.cloudinary.com/dzxalfzwh/video/upload/v1736717985/nbpn2cbr1js9m0eqjhpm.mp4"
				autoplay
				muted
				loop
			></video>
		</div>
	{/if}

	<!-- Black overlay -->
	<div class="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>

	<div class="video-content z-40 space-y-2">
		<div class="rich-text">
			<PrismicRichText
				field={slice.primary.heading}
				components={{
					heading1: Heading
				}}
			/>
		</div>

		<a href="/contact" class="sr-only">{slice.primary.buttonText}</a>

		<ButtonLink on:click={toggleContactModal} class="cursor-pointer"
			>{slice.primary.buttonText}</ButtonLink
		>
		<!-- <button
			class="flex-shrink-0 text-white bg-orange-500 border-0 shadow-lg py-2 px-4 focus:outline-none hover:bg-orange-600 rounded-xl text-md mt-10 sm:mt-0"
			>Let's talk about your project</button
		> -->
	</div>
</section>

{#if isContactModalOpen}
	<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-start justify-center p-4 text-center sm:items-start sm:p-0">
				<div
					class="relative transform overflow-hidden rounded-lg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-slate-100 to-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
				>
					<div class="flex justify-end p-2">
						<button
							type="button"
							on:click={() => (isContactModalOpen = false)}
							class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						>
							<svg
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path></svg
							>
						</button>
					</div>

					<div class="sm:flex sm:items-start mt-2">
						<div class="text-gray-600 body-font relative">
							<div class=" px-1 pb-4 mx-auto">
								<div class="flex flex-col text-center w-full mb-4">
									<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
										Contact Us
									</h1>
									<!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
										Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
									</p> -->
								</div>
								<div class="w-full px-12 mx-auto">
									<div class="flex flex-wrap -m-2">
										<form class="w-full" on:submit|preventDefault={sendEmail}>
											<div class="flex flex-row gap-4">
												<div class="p-2 w-1/2">
													<div class="relative">
														<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
														<input
															type="text"
															id="name"
															name="name"
															bind:value={name}
															class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
														/>
													</div>
												</div>
												<div class="p-2 w-1/2">
													<div class="relative">
														<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
														<input
															type="email"
															id="email"
															name="email"
															bind:value={email}
															class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-300 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
														/>
													</div>
												</div>
											</div>
											<div class="p-2 w-full">
												<div class="relative">
													<label for="message" class="leading-7 text-sm text-gray-600"
														>Message</label
													>
													<textarea
														id="message"
														name="message"
														bind:value={message}
														class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-300 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
													></textarea>
												</div>
											</div>
											<div class="p-2 w-full">
												<button
													on:click={sendEmail}
													type="button"
													class="flex mx-auto text-white bg-gradient-to-r shadow-lg from-[#fda58a] to-[#f59e0b] border-0 py-1.5 px-6 focus:outline-none hover:bg-orange-500 rounded-2xl text-lg"
													>Submit</button
												>
											</div>
											<div class="p-2 w-full pt-3 mt-4 border-t border-gray-200 text-center">
												<p class="text-orange-300">info@elitecon.ca</p>
												<!-- <p class="leading-normal my-2">
													49 Smith St.
													<br />Saint Cloud, MN 56301
													</p>
													<span class="inline-flex">
														<a href="/" class="text-gray-500">
														<svg
														fill="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														class="w-5 h-5"
														viewBox="0 0 24 24"
														>
														<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
														></path>
														</svg>
														</a>
														<a href="/" class="ml-4 text-gray-500">
														<svg
														fill="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														class="w-5 h-5"
														viewBox="0 0 24 24"
														>
														<path
														d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
														></path>
													</svg>
													</a>
													<a href="/" class="ml-4 text-gray-500">
													<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													>
													<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
													<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
													></path>
													</svg>
													</a>
													<a href="/" class="ml-4 text-gray-500">
													<svg
														fill="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														class="w-5 h-5"
														viewBox="0 0 24 24"
														>
														<path
														d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
														></path>
														</svg>
														</a>
														</span> -->
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.rich-text {
		margin: 2rem 0;
	}
</style>
