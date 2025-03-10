<script lang="ts">
	import '../app.css';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import FooterMain from '$lib/components/FooterMain.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta charset="UTF-8" />
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1" /> -->
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={$page.url} />
	<script src="https://analytics.ahrefs.com/analytics.js" data-key="fAzQlIWh8JzpArHv6dagBw" async></script>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=elite-con-website"></script>

	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
		<meta property="og:description" content={$page.data.meta_description} />
		<meta name="twitter:description" content={$page.data.meta_description} />
	{/if}

	{#if $page.data.meta_title}
		<meta property="og:title" content={$page.data.meta_title} />
		<meta name="twitter:title" content={$page.data.meta_title} />
	{/if}

	{#if $page.data.meta_image}
		<meta property="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url} />

	<!-- <script
		async
		defer
		src="https://static.cdn.prismic.io/prismic.js?new=true&repo=elite-con-website"
	></script> -->

	<!-- JSON-LD Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"url": "{$page.url}",
			"name": "{$page.data.meta_title}",
			"description": "{$page.data.meta_description}",
			"publisher": {
				"@type": "Organization",
				"name": "EliteCon",
				"url": "https://elitecon.ca"
			}
		}
	</script>
</svelte:head>

<div class="text-slate-800 grid w-full grid-cols-1 items-center">
	<Header navigation={data.navigation} settings={data.settings} />
	<main class=""><slot /></main>
	<FooterMain bottomnav={data.bottomnav} />
</div>

<div
	class="hidden lg:block fixed bottom-0 left-0 w-full bg-black bg-opacity-65 text-white text-center py-2 z-50"
>
	<div class="flex flex-col gap-4">
		<h3 class="text-xl uppercase text-center">LET'S GET STARTED</h3>
		<div class="flex flex-row gap-4 justify-center items-center text-center">
			<ButtonLink href="mailto:info@elitecon.ca" class="cursor-pointer"
				>Send Us A Message</ButtonLink
			>
			<p class="mb-1 text-lg">or</p>
			<ButtonLink href="tel:4168254614" class="cursor-pointer">Call 4168254614</ButtonLink>
		</div>
	</div>
</div>

<PrismicPreview {repositoryName} />
