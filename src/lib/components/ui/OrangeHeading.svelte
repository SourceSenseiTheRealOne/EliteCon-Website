<!-- <h2 class="text-4xl lg:text-6xl mb-4 font-medium text-nowrap text-orange-200 text-center">
    <PrismicRichText field={slice.primary.title} />
</h2> -->

<script lang="ts">
	export let children: any;
</script>

<h2 class="text-4xl lg:text-6xl mb-4 font-medium text-nowrap text-orange-200 text-center">
	<slot />
</h2>
