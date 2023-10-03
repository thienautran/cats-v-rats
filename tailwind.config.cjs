/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				'vh-5': 'calc(100vh - 1.5rem)',
				'vw-5': 'calc(100vw - 1.5rem)',
			  },
			  width: {
				'vh-5': 'calc(100vh - 1.5rem)',
				'vw-5': 'calc(100vw - 1.5rem)',
			  },
		}
	},

	plugins: []
};

module.exports = config;
