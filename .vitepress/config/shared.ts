import { defineConfig } from 'vitepress'

export const shared = defineConfig({
	rewrites: {
		'en/:rest*': ':rest*',
	},
	lastUpdated: true,
	cleanUrls: true,
	themeConfig: {
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/bombsquad02420' },
		],
		search: { provider: 'local' },
		outline: 'deep',
	},
})