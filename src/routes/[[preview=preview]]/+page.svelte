<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { page } from '$app/stores';
	import { components } from '$lib/slices';
	import { onMount } from 'svelte';

	export let data;

	let loading = true;

	onMount(() => {
		if (data) {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>{data.page.data.meta_title || data.page.data.title}</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
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

{#if loading}
	<div class="wave-container">
		<h3 class="wave-text">
			<span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span
				>G</span
			><span>.</span><span>.</span><span>.</span>
		</h3>
	</div>
{:else}
	<SliceZone slices={data.page.data.slices} {components} />
{/if}

<style>
	.wave-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
		background: #101010;
		color: #fff;
		font-family: 'Arial', sans-serif;
	}

	.wave-text span {
		display: inline-block;
		font-size: 4rem;
		animation: wave 2s ease-in-out infinite;
	}

	.wave-text span:nth-child(1) {
		animation-delay: 0s;
	}
	.wave-text span:nth-child(2) {
		animation-delay: 0.2s;
	}
	.wave-text span:nth-child(3) {
		animation-delay: 0.4s;
	}
	.wave-text span:nth-child(4) {
		animation-delay: 0.6s;
	}

	@keyframes wave {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}
</style>
