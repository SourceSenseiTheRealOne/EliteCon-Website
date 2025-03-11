<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';

	export let children: any;
</script>

<Heading className="text-center text-4xl lg:text-6xl font-medium  first:mt-0 last:mb-0">
	<slot />
</Heading>
