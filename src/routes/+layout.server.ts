import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const settings = await client.getSingle('settings');
	const navigation = await client.getSingle('navigation');
	const bottomnav = await client.getSingle("bottomnavigation")

	return {
		settings,
		navigation,
		bottomnav,
	};
}
