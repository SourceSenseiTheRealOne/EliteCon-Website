<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.HomeMapSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-gray-600 body-font relative py-12 lg:px-24 lg:py-20"
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
	<div class="container mx-auto flex">
		<div
			class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
		>
		
			<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
			<p class="leading-relaxed mb-5 text-gray-600">
				Post-ironic portland shabby chic echo park, banjo fashion axe
			</p>
			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
				<textarea
					id="message"
					name="message"
					class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
				></textarea>
			</div>
			<!-- <ButtonLink class="cursor-pointer">Submit</ButtonLink> -->
			
			<button
				class="text-white font-semibold bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg"
				>Submit</button
			>
			<p class="text-xs text-gray-500 mt-3">
				Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
			</p>
		</div>
	</div>
</section>
