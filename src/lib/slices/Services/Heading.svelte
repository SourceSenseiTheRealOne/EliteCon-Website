<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';

	export let children: any;
</script>

<Heading as="h3" size="xl" className="mb-4 mt-12 text-6xl first:mt-0 last:mb-0">
	<slot />
</Heading>
