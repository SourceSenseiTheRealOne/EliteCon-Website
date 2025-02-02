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
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
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
			<ButtonLink class="cursor-pointer">Send Us A message</ButtonLink>

			<p class="mb-1 text-lg">or</p>

			<ButtonLink class="cursor-pointer">Call 416-704-3637</ButtonLink>
		</div>
	</div>
</div>
<PrismicPreview {repositoryName} />
