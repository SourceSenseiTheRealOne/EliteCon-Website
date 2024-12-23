<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicText } from '@prismicio/svelte';

	import Bounded from './Bounded.svelte';

	export let settings: Content.SettingsDocument;
	export let navigation: Content.NavigationDocument;

	let isDropdownClose = false;

	const toggleDropdown = () => {
		isDropdownClose = !isDropdownClose;

		console.log(isDropdownClose);
	};
</script>

<Bounded tag="header" yPadding="sm" class="fixed top-0 left-0 w-full z-50">
	<div class=" lg:pb-12">
		<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
			<header
				class="flex items-center justify-between py-1 md:py-2 bg-black bg-opacity-35 px-6 rounded-2xl"
			>
				<!-- logo - start -->
				<a
					href="/"
					class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl"
					aria-label="logo"
				>
					<!-- <svg
						width="95"
						height="94"
						viewBox="0 0 95 94"
						class="h-auto w-6 text-orange-500"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M96 0V47L48 94H0V47L48 0H96Z" />
					</svg> -->

					<!-- <PrismicText field={settings.data.siteTitle} /> -->
					 <div class="w-40 h-20 mb-8">
						 
						 <PrismicImage field={settings.data.logo} />
						</div>
				</a>
				<!-- logo - end -->

				<!-- nav - start -->
				<nav class="hidden gap-12 lg:flex">
					{#each navigation.data?.links as item}
						<a
							href="#"
							class="text-lg font-semibold text-white transition duration-100 hover:text-orange-500 active:text-orange-600"
						>
							<PrismicLink field={item.link}>
								<PrismicText field={item.label} />
							</PrismicLink></a
						>
					{/each}

					<button
						on:click={toggleDropdown}
						class="inline-flex items-center gap-1 text-lg font-semibold text-orange-600"
					>
						Features

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-orange-800"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</nav>
				<!-- nav - end -->

				<!-- buttons - start -->
				<div
					class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"
				>
					<!-- <a
						href="#"
						class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
						>Sign in</a
					> -->

					<a
						href="#"
						class="inline-block rounded-lg bg-orange-500 px-4 py-2 text-center text-sm font-semibold shadow-sm text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
						>Contact</a
					>
				</div>

				<button
					type="button"
					class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-1 py-1.5 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
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
		</div>
	</div>
</Bounded>

<style>
	.dropdown__menu__index {
		z-index: 1000;
	}
</style>
