<script lang="ts">
	import type { Content } from '@prismicio/client';

	export let slice: Content.ServicesSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="text-white body-font bg-black"
>
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-6xl font-medium title-font mb-4 text-orange-500">Services</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
				farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
				heirloom.
			</p>
		</div>
		<div class="flex flex-wrap -m-4">
			<div class="lg:w-1/3 sm:w-1/2 p-4">
				<div class="flex relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/600x360"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
					>
						<h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
							THE SUBTITLE
						</h2>
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
						<p class="leading-relaxed">
							Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled
							waistcoat.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 sm:w-1/2 p-4">
				<div class="flex relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/601x361"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
					>
						<h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
							THE SUBTITLE
						</h2>
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
						<p class="leading-relaxed">
							Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled
							waistcoat.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 sm:w-1/2 p-4">
				<div class="flex relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/603x363"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
					>
						<h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
							THE SUBTITLE
						</h2>
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
						<p class="leading-relaxed">
							Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled
							waistcoat.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 sm:w-1/2 p-4">
				<div class="flex relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/602x362"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
					>
						<h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
							THE SUBTITLE
						</h2>
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
						<p class="leading-relaxed">
							Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled
							waistcoat.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 sm:w-1/2 p-4">
				<div class="flex relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/605x365"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
					>
						<h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
							THE SUBTITLE
						</h2>
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
						<p class="leading-relaxed">
							Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled
							waistcoat.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 sm:w-1/2 p-4">
				<div class="flex relative">
					<img
						alt="gallery"
						class="absolute inset-0 w-full h-full object-cover object-center"
						src="https://dummyimage.com/606x366"
					/>
					<div
						class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
					>
						<h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
							THE SUBTITLE
						</h2>
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
						<p class="leading-relaxed">
							Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled
							waistcoat.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
