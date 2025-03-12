<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';
	import Bounded from './Bounded.svelte';
	import ButtonLink from './ButtonLink.svelte';
	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;
	import clsx from 'clsx';
	import emailjs from '@emailjs/browser';
	import { onMount, onDestroy } from 'svelte';
	import { tick } from 'svelte';
	import EmailTemplateModal from './EmailTemplateModal.svelte';

	// NAV ITEMS DATA

	// ===============================================================================================

	let className = undefined;

	// ===============================================================================================

	// MOBILE DROPDOWN

	// ===============================================================================================

	let isContactModalOpen = false;
	let menuRef: HTMLElement | null = null;
	let menuButtonRef: HTMLElement | null = null;
	let openDropdownIndex: any = null;
	let isMobileDropdownOpen = false;
	const isMobile = () => window.innerWidth < 1024;

	const toggleContactModal = () => {
		isContactModalOpen = !isContactModalOpen;
	};

	const toggleMobileDropdown = async (event) => {
		event.stopPropagation(); // Prevents bubbling
		isMobileDropdownOpen = !isMobileDropdownOpen;
		console.log('Dropdown state:', isMobileDropdownOpen);

		await tick();
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			isMobileDropdownOpen &&
			menuRef &&
			!menuRef.contains(event.target as Node) &&
			!menuButtonRef?.contains(event.target as Node) // Fix: Ensure clicks on the button don't close the menu
		) {
			isMobileDropdownOpen = false;
		}
	};

	const toggleDropdown = (index) => {
		openDropdownIndex = openDropdownIndex === index ? null : index;
	};

	$: if (navigation.data?.links) {
		console.log(navigation.data?.links);
	}
	// ===============================================================================================

	// EMAIL SERVICE

	// ===============================================================================================

	let firstName = '';
	let email = '';
	let message = '';

	const sendEmail = async () => {
		const serviceID = 'info@elitecon.ca';
		const templateID = 'template_qrug1bj';
		const userID = 'jlGy-a_PB1VUcaK1J';

		const templateParams = {
			firstName,
			email,
			message
		};

		try {
			const response = await emailjs.send(serviceID, templateID, templateParams, userID);
			alert('Email sent successfully!');
			console.log('EmailJS Response:', response);

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

	// ===============================================================================================

	onMount(() => {
		if (typeof document !== 'undefined' && isMobile()) {
			document.addEventListener('click', handleClickOutside);
		}
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<Bounded
	tag="header"
	yPadding="sm"
	class="fixed top-0 left-0 w-full z-50 py-1 bg-black bg-opacity-65 px-2"
>
	<header class="flex items-center justify-between">
		<a
			href="tel:4168254614"
			class="inline-flex items-center text-2xl font-bold text-white lg:hidden"
		>
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
							class="hidden group-hover:block rounded-lg lg:shadow-lg bg-black bg-opacity-75 ring-orange-300 transition-colors after:absolute after:inset-0 after:-z-10 after:transition-all after:duration-500 hover:border-orange-200/40 hover:text-orange-300 after:hover:bg-opacity-15 focus:ring-2 absolute top-full w-max left-1/2 transform -translate-x-1/2"
						>
							<ul class="py-2">
								{#each item.link as link, index}
									{#if link}
										{#if link.uid}
											<li>
												<PrismicLink
													class="block px-6 py-2 hover:bg-orange-300 hover:bg-opacity-85 text-white font-medium capitalize"
													field={link}>{link.uid.replace(/-/g, ' ')}</PrismicLink
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
								
									<p class="sr-only">To see all of our basketball videos, <a class="sr-only"" href={item.mainlinkitem?.text}>click here</a>.</p>
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
			<a href="/contact" class="sr-only">Contact</a>
			<ButtonLink on:click={toggleContactModal} class="cursor-pointer">Contact</ButtonLink>
		</div>

		<button
			bind:this={menuButtonRef}
			on:click|stopPropagation={toggleMobileDropdown}
			class={clsx(
				'cursor-pointer relative inline-flex h-fit w-fit rounded-xl border border-orange-100/20 bg-orange-300/10 px-4 py-2 text-orange-200 outline-none ring-orange-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-orange-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-orange-200/40 hover:text-orange-300 after:hover:bg-opacity-15 focus:ring-2 md:text-base lg:hidden',
				className
			)}
		>
			<svg
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
			</svg>
		</button>

		<!-- buttons - end -->
	</header>

	<div bind:this={menuRef} on:click={handleClickOutside}>
		{#if isMobileDropdownOpen}
			<div class="md:text-base lg:hidden">
				<nav class="flex flex-row gap-4 text-center mt-4 max-w-full flex-wrap">
					{#each navigation.data?.links as item, index}
						<div class="relative text-center">
							<!-- Main navigation item -->
							{#if item}
								<ul class="">
									<li
										on:click={() => toggleDropdown(index)}
										class="text-md font-normal cursor-pointer text-white transition-colors hover:text-orange-300 focus:ring-2 focus:ring-orange-300 flex justify-between items-center"
									>
										<PrismicLink class="text-nowrap" field={item.mainlinkitem}>
											<PrismicText field={item.label} />
											{#if Array.isArray(item.link) && item.link && item.link.length > 1}
												<!-- Show dropdown arrow only if item has sub-links -->
												<span class="ml-2">▼</span>
											{/if}
										</PrismicLink>
									</li>
								</ul>
							{/if}

							<!-- Dropdown menu (if applicable) -->
							{#if openDropdownIndex === index}
								{#if item.link.length > 1}
									<div
										class="absolute left-0 mt-2 w-full min-w-[200px] bg-black bg-opacity-75 border-orange-300 border rounded-xl z-50"
									>
										<ul class="py-2">
											{#each item.link as link}
												{#if link && link.uid}
													<li>
														<PrismicLink
															class="block px-6 py-2 hover:bg-orange-300 hover:bg-opacity-85 text-white font-medium capitalize"
															field={link}
														>
															{link.uid.replace(/-/g, ' ')}
														</PrismicLink>
													</li>
												{/if}
											{/each}
										</ul>
									</div>
								{/if}
							{/if}
						</div>
					{/each}
				</nav>
			</div>
		{/if}
	</div>
</Bounded>

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
	.dropdown__menu__index {
		z-index: 1000;
	}
</style>
