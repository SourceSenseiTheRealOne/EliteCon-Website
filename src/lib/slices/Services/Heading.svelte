<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';

	export let children: any;
</script>

<Heading   className="mb-4 mt-12 text-center text-4xl first:mt-0 last:mb-0">
	<slot />
</Heading>
