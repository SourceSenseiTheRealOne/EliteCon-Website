<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import type { Content } from '@prismicio/client';

	import OrangeHeading from '$lib/components/ui/OrangeHeading.svelte';

	import emailjs from '@emailjs/browser';

	export let slice: Content.AboutUsSlice;

	const components: PrismicRichText['components'] = {
		heading2: OrangeHeading
	};

	// 	- first name
	// - last name
	// - company
	// - email
	// - subject
	// - message

	let firstName = '';
	let lastName = '';
	let company = '';
	let email = '';
	let subject = '';
	let message = '';

	const sendEmail = async () => {
		const serviceID = 'info@elitecon.ca';
		const templateID = 'template_qrug1bj';
		const userID = 'jlGy-a_PB1VUcaK1J';

		const templateParams = {
			firstName,
			lastName,
			company,
			email,
			subject,
			message
		};

		try {
			const response = await emailjs.send(serviceID, templateID, templateParams, userID);
			alert('Email sent successfully!');
			console.log('EmailJS Response:', response);

			// Reset form fields

			firstName = '';
			lastName = '';
			company = '';
			email = '';
			subject = '';
			message = '';
		} catch (error) {
			console.error('EmailJS Error:', error);
			alert('Failed to send email. Please try again.');
		}
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="bg-black text-white py-4 lg:px-24 lg:py-8 flex items-center mb-4"
>
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8 lg:flex lg:flex-row lg:gap-8">
		<!-- text - start -->
		<div class="mb-10 md:mb-16">
			<PrismicRichText {components} field={slice.primary.title} />

			<p class="mx-auto max-w-screen-md text-center text-white md:text-lg">
				<PrismicRichText field={slice.primary.description} />
			</p>
		</div>
		<!-- text - end -->

		<div>
			<!-- form - start -->
			<form
				on:submit|preventDefault={sendEmail}
				class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
			>
				<div>
					<label for="name" class="mb-2 inline-block text-sm text-orange-200 sm:text-base"
						>First name*</label
					>
					<input
						name="firstName"
						bind:value={firstName}
						class="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-orange-300 transition duration-100 focus:ring"
					/>
				</div>

				<div>
					<label for="last-name" class="mb-2 inline-block text-sm text-orange-200 sm:text-base"
						>Last name*</label
					>
					<input
						bind:value={lastName}
						name="lastName"
						class="w-full rounded border bg-gray-50 px-3 py-2 text-black  outline-none ring-orange-300 transition duration-100 focus:ring"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="company" class="mb-2 inline-block text-sm text-orange-200 sm:text-base"
						>Company</label
					>
					<input
						bind:value={company}
						name="company"
						class="w-full rounded border bg-gray-50 px-3 py-2 text-black  outline-none ring-orange-300 transition duration-100 focus:ring"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="email" class="mb-2 inline-block text-sm text-orange-200 sm:text-base"
						>Email*</label
					>
					<input
						name="email"
						bind:value={email}
						class="w-full rounded border bg-gray-50 px-3 py-2 text-black  outline-none ring-orange-300 transition duration-100 focus:ring"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="subject" class="mb-2 inline-block text-sm text-orange-200 sm:text-base"
						>Subject*</label
					>
					<input
						bind:value={subject}
						name="subject"
						class="w-full rounded border bg-gray-50 px-3 py-2 text-black  outline-none ring-orange-300 transition duration-100 focus:ring"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="message" class="mb-2 inline-block text-sm text-orange-200 sm:text-base"
						>Message*</label
					>
					<textarea
						name="message"
						bind:value={message}
						class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-black  outline-none ring-orange-300 transition duration-100 focus:ring"
					></textarea>
				</div>

				<div class="flex items-center justify-between sm:col-span-2">
					<ButtonLink type="submit" class="cursor-pointer" on:click={sendEmail}>Send</ButtonLink>
					<!-- <button
						class="inline-block rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-indigo-700 md:text-base"
						>Send</button
					> -->

					<span class="text-sm text-gray-500">*Required</span>
				</div>

				<p class="text-xs text-gray-400">
					By signing up to our newsletter you agree to our <a
						href="#"
						class="underline transition duration-100 hover:text-orange-500 active:text-orange-600"
						>Privacy Policy</a
					>.
				</p>
			</form>
			<!-- form - end -->
		</div>
	</div>
</section>
