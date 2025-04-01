<script lang="ts">
	import { asText, isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';

	export let slice: Content.HeroSlice;

	import emailjs from '@emailjs/browser';
	import EmailTemplateModal from '$lib/components/EmailTemplateModal.svelte';

	let isBgImageFound = false;

	$: if (slice.primary.backgroundImage) {
		console.log(slice.primary.backgroundImage.alt);
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

	let firstName = '';
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
			firstName = '';
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

		<a href="https://www.elitecon.ca/" class="sr-only">{slice.primary.buttonText}</a>

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
	<div class="relative  z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

		<div class="fixed inset-0 z-10 w-screen mt-12 overflow-y-auto">
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

					<div class="text-gray-600 body-font relative">
						<div class=" px-1 pb-4 mx-auto">
							<div class="flex flex-col text-center w-full mb-4">
								<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
									Contact Us
								</h1>
							</div>
							<div class="w-full px-12 mx-auto">
								<div class="flex flex-wrap -m-2">
									<form class="w-full" on:submit|preventDefault={sendEmail}>
										<EmailTemplateModal bind:firstName bind:email bind:message {sendEmail} />
										<div class="p-2 w-full pt-3 mt-4 border-t border-gray-200 text-center">
											<p class="text-orange-300">info@elitecon.ca</p>
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
{/if}

<style>
	.rich-text {
		margin: 2rem 0;
	}
</style>
