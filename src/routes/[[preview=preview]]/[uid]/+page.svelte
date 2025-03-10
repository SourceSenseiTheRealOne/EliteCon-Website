<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { page } from '$app/stores';
	import { components } from '$lib/slices';

	export let data;
</script>

<svelte:head>
	<title>{data.page.data.meta_title || data.page.data.title}</title>
	<meta charset="UTF-8" />
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1" /> -->

	<meta name="robots" content="index, follow" />

	<script
		async
		defer
		src="https://static.cdn.prismic.io/prismic.js?new=true&repo=elite-con-website"
	></script>

	{#if data.page.data.meta_description}
		<meta name="description" content={data.page.data.meta_description} />
		<meta property="og:description" content={data.page.data.meta_description} />
		<meta name="twitter:description" content={data.page.data.meta_description} />
	{/if}

	<meta property="og:title" content={data.page.data.meta_title || data.page.data.title} />
	<meta property="og:url" content={$page.url} />
	<meta property="og:type" content="website" />

	{#if data.page.data.meta_image}
		<meta property="og:image" content={data.page.data.meta_image.url} />
		<meta name="twitter:image" content={data.page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={$page.url} />

	<!-- JSON-LD Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"url": "{url}",
			"name": "{data.page.data.meta_title || data.page.data.title}",
			"description": "{data.page.data.meta_description}",
			"publisher": {
				"@type": "Organization",
				"name": "EliteCon",
				"url": "https://elitecon.ca"
			}
		}
	</script>
</svelte:head>

<SliceZone slices={data.page.data.slices} {components} />
