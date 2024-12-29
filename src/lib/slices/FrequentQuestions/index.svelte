<script lang="ts">
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';

	import Heading from './Heading.svelte';

	export let slice: Content.FrequentQuestionsSlice;

	const components: PrismicRichText['components'] = {
		heading2: Heading
	};

	let openQuestions: boolean[] = Array(slice.primary.card.length).fill(false);

	const toggleQuestion = (index: number) => {
		openQuestions = openQuestions.map((isOpen, i) => (i === index ? !isOpen : isOpen));
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-6 sm:py-8 lg:py-12"
>
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<!-- text - start -->
		<div class="mb-10 md:mb-16">
			<h2 class="text-center">
				<PrismicRichText {components} field={slice.primary.title} />
			</h2>

			<p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
				<PrismicRichText field={slice.primary.description} />
			</p>
		</div>
		<!-- text - end -->

		<div class="mx-auto flex max-w-screen-sm flex-col border-t">
			<!-- question - start -->
			{#each slice.primary.card as item, index}
				<!-- Render content for item -->
				<div class="border-b">
					<div
						class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-orange-300 active:text-orange-400"
					>
						<span class="font-semibold transition duration-100 md:text-lg"
							><PrismicRichText field={item.title} /></span
						>

						<button on:click={() => toggleQuestion(index)} class="text-orange-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>

					{#if openQuestions[index]}
						<p class="mb-4 text-left text-gray-500">
							<PrismicRichText field={item.answer} />
						</p>
					{/if}
				</div>
			{/each}
			<!-- question - end -->
		</div>
	</div>
</section>
