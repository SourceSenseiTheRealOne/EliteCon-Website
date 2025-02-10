<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.HomeMapSlice;

	const serviceID = 'info@elitecon.ca';
	const templateID = 'template_qrug1bj';
	const userID = 'jlGy-a_PB1VUcaK1J';
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-gray-600 body-font relative py-12 lg:px-24 lg:py-20 h-[500px]"
>
	<div class="absolute inset-0 bg-gray-300">
		<iframe
			width="100%"
			height="100%"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
			title="map"
			scrolling="no"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46061.94129754183!2d-79.41510020000001!3d43.81702824999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c5040f03c07%3A0x89513ec1ecb20db1!2sThornhill%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2spt!4v1739055857045!5m2!1sen!2spt"
			style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
		></iframe>
	</div>
</section>
