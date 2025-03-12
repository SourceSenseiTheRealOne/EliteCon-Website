<script lang="ts">
	export let firstName: string;
	export let email: string;
	export let message: string;
	export let sendEmail: () => void;
</script>

<div class="p-4 mx-auto max-w-xl">
	<!-- <h1 class="text-2xl text-slate-900 font-semibold text-center">Contact us</h1> -->
	<form class="mt-8 space-y-5" on:submit|preventDefault={sendEmail}>
		<div>
			<label class="text-sm text-slate-800 font-medium mb-2 block">Name</label>
			<input
				type="text"
				placeholder="Enter Name"
				bind:value={firstName}
				class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
			/>
		</div>
		<div>
			<label class="text-sm text-slate-800 font-medium mb-2 block">Email</label>
			<input
				type="email"
				placeholder="Enter Email"
				bind:value={email}
				class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
			/>
		</div>

		<div>
			<label class="text-sm text-slate-800 font-medium mb-2 block">Message</label>
			<textarea
				placeholder="Enter Message..."
				bind:value={message}
				class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
			></textarea>
		</div>

		<div>
			<button
				type="submit"
				class="flex mx-auto text-white bg-gradient-to-r shadow-lg from-[#fda58a] to-[#f59e0b] border-0 py-1.5 px-6 focus:outline-none hover:bg-orange-500 rounded-2xl text-lg"
			>
				Submit
			</button>
		</div>
	</form>
</div>
