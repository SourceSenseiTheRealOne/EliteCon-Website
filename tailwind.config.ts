import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import * as preset from './tailwind.preset.js';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [preset],
	safelist: ['dark'],
	theme: {
		
		extend: {
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
	plugins: []
} satisfies Config;
