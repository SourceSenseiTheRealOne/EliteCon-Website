<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';

	import Bounded from './Bounded.svelte';
	import ButtonLink from './ButtonLink.svelte';

	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;

	import emailjs from '@emailjs/browser';

	let isContactModalOpen = false;

	const toggleContactModal = () => {
		isContactModalOpen = !isContactModalOpen;
	};

	$: isMobileDropdownOpen = false;

	const toggleMobileDropdown = () => {
		isMobileDropdownOpen = !isMobileDropdownOpen;
	};

	let name = '';
	let email = '';
	let message = '';

	const sendEmail = async () => {
		const serviceID = 'your_service_id';
		const templateID = 'your_template_id';
		const userID = 'your_public_key';

		const templateParams = {
			name,
			email,
			message
		};

		try {
			const response = await emailjs.send(serviceID, templateID, templateParams, userID);
			alert('Email sent successfully!');
			console.log('EmailJS Response:', response);

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

<Bounded
	tag="header"
	yPadding="sm"
	class="fixed top-0 left-0 w-full z-50 py-1 bg-black bg-opacity-65 px-2"
>
	<header class="flex items-center justify-between">
		<a href="/" class="inline-flex items-center text-2xl font-bold text-white lg:hidden">
			<div class="ml-2 lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class=" text-lg font-semibold text-orange-200 transition-colors hover:text-orange-300 focus:ring-2 focus:text-orange-300"
					width="1.55em"
					height="1.55em"
					viewBox="0 0 256 256"
					{...$$props}
					><path
						fill="currentColor"
						d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"
					/></svg
				>
			</div>
		</a>

		<!-- logo - start -->
		<a
			href="/"
			class="inline-flex items-center text-2xl font-bold text-white md:text-3xl"
			aria-label="logo"
		>
			<PrismicImage class="lg:w-40 lg:h-16 w-fit h-16" field={settings.data.logo} />
		</a>
		<!-- logo - end -->

		<!-- nav - start -->
		<nav class="hidden gap-6 lg:flex items-center">
			{#each navigation.data?.links as item}
				<li class="relative text-center items-center flex group">
					{#if Array.isArray(item.link) && item.link.length > 1}
						<!-- Dropdown menu with multiple links -->

						<ul>
							<li
								class="text-lg font-normal cursor-pointer text-white transition-colors hover:text-orange-300 focus:ring-2 focus:ring-yellow-300"
							>
								<PrismicText field={item.label} />
							</li>
						</ul>

						<div
							class="hidden group-hover:block rounded-xl lg:shadow-lg bg-black bg-opacity-75 border-orange-400 border absolute top-full w-max left-1/2 transform -translate-x-1/2"
						>
							<ul class="py-2">
								{#each item.link as link, index}
									{#if link}
										{#if link.slug}
											<li>
												<PrismicLink
													class="block px-6 py-2 hover:bg-orange-300 hover:bg-opacity-85 text-white font-medium capitalize"
													field={link}>{link.slug.replace(/-/g, ' ')}</PrismicLink
												>
											</li>
										{/if}
									{/if}
								{/each}
							</ul>
						</div>
					{:else}
						<!-- Single link (no dropdown) -->

						<ul>
							<li
								class="text-lg font-normal cursor-pointer text-white transition duration-100 hover:text-orange-200 active:text-orange-300"
							>
								<PrismicLink field={item.mainlinkitem}>
									<PrismicText field={item.label} />
								</PrismicLink>
							</li>
						</ul>
					{/if}
				</li>
			{/each}
		</nav>

		<!-- nav - end -->

		<!-- buttons - start -->
		<div
			class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"
		>
			<ButtonLink on:click={toggleContactModal} class="cursor-pointer">Contact</ButtonLink>
		</div>

		<ButtonLink
			on:click={() => toggleMobileDropdown()}
			class="cursor-pointer active:text-white md:text-base lg:hidden"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/>
			</svg></ButtonLink
		>

		<!-- buttons - end -->
	</header>

	{#if isMobileDropdownOpen}
		<div class="md:text-base lg:hidden">
			<nav class="flex space-x-3 mt-4 justify-center">
				<!-- Added flex and space-x-4 -->
				{#each navigation.data?.mobilenavigation as item}
					<div class="relative text-center items-center flex group">
						<ul>
							<li
								class="text-md font-normal cursor-pointer text-white transition-colors hover:text-orange-300 focus:ring-2 focus:ring-orange-300"
							>
								<PrismicLink field={item.pagelink}>
									<PrismicText field={item.label} />
								</PrismicLink>
							</li>
						</ul>
					</div>
				{/each}
			</nav>
		</div>
	{/if}
</Bounded>

{#if isContactModalOpen}
	<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
									<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
										Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
									</p>
								</div>
								<div class="w-full px-12 mx-auto">
									<div class="flex flex-wrap -m-2">
										<form class="w-full" on:submit|preventDefault={sendEmail}>
											<div class="p-2 w-1/2">
												<div class="relative">
													<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
													<input
														type="text"
														id="name"
														name="name"
														bind:value={name}
														class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
														class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
													/>
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
														class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
													></textarea>
												</div>
											</div>
											<div class="p-2 w-full">
												<button
													type="submit"
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
	.dropdown__menu__index {
		z-index: 1000;
	}
</style>
