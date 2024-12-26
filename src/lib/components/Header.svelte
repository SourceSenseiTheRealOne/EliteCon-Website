<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';

	import Bounded from './Bounded.svelte';
	import ButtonLink from './ButtonLink.svelte';

	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;

	let isDropdownClose = false;

	const toggleDropdown = () => {
		isDropdownClose = !isDropdownClose;

		console.log(isDropdownClose);
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
					class=" text-lg font-semibold text-orange-200 transition-colors hover:text-orange-300 focus:ring-2 focus:ring-yellow-300"
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
			class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl"
			aria-label="logo"
		>
			<PrismicImage class="lg:w-40 lg:h-16 w-fit h-16" field={settings.data.logo} />
		</a>
		<!-- logo - end -->

		<!-- nav - start -->
		<nav class="hidden gap-12 lg:flex items-center">
			{#each navigation.data?.links as item}
				<a
					href="#"
					class="text-lg font-semibold text-white transition duration-100 hover:text-orange-200 active:text-orange-300"
				>
					<PrismicLink field={item.link}>
						<PrismicText field={item.label} />
					</PrismicLink></a
				>
			{/each}

			<div class="flex items-center justify-self-center text-center">
				<li class="relative text-center items-center flex group">
					<button
						class="gap-1 text-lg font-semibold text-orange-200 transition-colors hover:text-orange-300 focus:ring-2 focus:ring-yellow-300"
					>
						Products
					</button>
					<!-- Dropdown menu -->
					<div
						class="hidden group-hover:block rounded-xl lg:shadow-lg bg-black bg-opacity-75 border-orange-400 border absolute top-full w-max mt-1"
					>
						<ul class="py-2">
							<li>
								<a
									class="block px-6 py-2 hover:bg-orange-300 hover:bg-opacity-85 text-white font-medium"
									href="javascript:;"
								>
									Downloads
								</a>
							</li>
							<li>
								<a
									class="block px-6 py-2 hover:bg-orange-300 hover:bg-opacity-85 text-white font-medium"
									href="javascript:;"
								>
									Saved Files
								</a>
							</li>
							<li>
								<a
									class="block px-6 py-2 hover:bg-orange-300 hover:bg-opacity-85 text-white font-medium"
									href="javascript:;"
								>
									Notifications
								</a>
							</li>
						</ul>
					</div>
				</li>
			</div>
		</nav>
		<!-- nav - end -->

		<!-- buttons - start -->
		<div
			class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"
		>
			<ButtonLink class="cursor-pointer">Contact</ButtonLink>
		</div>

		<ButtonLink class="cursor-pointer active:text-white md:text-base lg:hidden"
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

	<!-- menu - start -->
	{#if isDropdownClose}
		<div
			class="mx-auto dropdown__menu__index -mt-4 hidden w-full max-w-screen-sm overflow-hidden rounded-lg border bg-white lg:block"
		>
			<div class="m-6 mb-10 grid grid-cols-2 gap-8">
				<!-- link - start -->
				<a href="#" class="group flex gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
							/>
						</svg>
					</div>

					<div>
						<div class="mb-1 font-semibold">th</div>
						<p class="text-sm text-gray-500">
							This is a section of some simple filler text, also known as placeholder text.
						</p>
					</div>
				</a>
				<!-- link - end -->

				<!-- link - start -->
				<a href="#" class="group flex gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>

					<div>
						<div class="mb-1 font-semibold">Security</div>
						<p class="text-sm text-gray-500">
							This is a section of some simple filler text, also known as placeholder text.
						</p>
					</div>
				</a>
				<!-- link - end -->

				<!-- link - start -->
				<a href="#" class="group flex gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
							/>
						</svg>
					</div>

					<div>
						<div class="mb-1 font-semibold">Cloud</div>
						<p class="text-sm text-gray-500">
							This is a section of some simple filler text, also known as placeholder text.
						</p>
					</div>
				</a>
				<!-- link - end -->

				<!-- link - start -->
				<a href="#" class="group flex gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white transition duration-100 group-hover:bg-orange-600 group-active:bg-orange-700 md:h-12 md:w-12"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
							/>
						</svg>
					</div>

					<div>
						<div class="mb-1 font-semibold">Analytics</div>
						<p class="text-sm text-gray-500">
							This is a section of some simple filler text, also known as placeholder text.
						</p>
					</div>
				</a>
				<!-- link - end -->
			</div>
		</div>
	{/if}
	<!-- menu - end -->
</Bounded>

<style>
	.dropdown__menu__index {
		z-index: 1000;
	}
</style>
