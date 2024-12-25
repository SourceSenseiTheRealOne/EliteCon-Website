<script lang="ts">
	import type { Content } from '@prismicio/client';

	export let slice: Content.TestimonialsSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="bg-black py-24 px-24"
>
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<h2 class="text-2xl lg:text-6xl mb-16 font-medium title-font text-orange-200 text-center">
			What others say about us
		</h2>

		<div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
			<!-- quote - start -->
			<div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
				<div class="text-center text-white">
					“This is a section of some simple filler text, also known as placeholder text.”
				</div>

				<div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
					<div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
						<img
							src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
							loading="lazy"
							alt="Photo by Radu Florin"
							class="h-full w-full object-cover object-center"
						/>
					</div>

					<div>
						<div class="text-center text-sm font-bold text-orange-200 sm:text-left md:text-base">
							John McCulling
						</div>
						<p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CEO / Datadrift</p>
					</div>
				</div>
			</div>
			<!-- quote - end -->

			<!-- quote - start -->
			<div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
				<div class="text-center text-white">
					“This is a section of some simple filler text, also known as placeholder text.”
				</div>

				<div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
					<div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
						<img
							src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
							loading="lazy"
							alt="Photo by christian ferrer"
							class="h-full w-full object-cover object-center"
						/>
					</div>

					<div>
						<div class="text-center text-sm font-bold text-orange-200 sm:text-left md:text-base">
							Kate Berg
						</div>
						<p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CFO / Dashdash</p>
					</div>
				</div>
			</div>
			<!-- quote - end -->

			<!-- quote - start -->
			<div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
				<div class="text-center text-white">
					“This is a section of some simple filler text, also known as placeholder text.”
				</div>

				<div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
					<div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
						<img
							src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
							loading="lazy"
							alt="Photo by Ayo Ogunseinde"
							class="h-full w-full object-cover object-center"
						/>
					</div>

					<div>
						<div class="text-center text-sm font-bold text-orange-200 sm:text-left md:text-base">
							Greg Jackson
						</div>
						<p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CTO / Uptime</p>
					</div>
				</div>
			</div>
			<!-- quote - end -->
		</div>
	</div>
</section>
