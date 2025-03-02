import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

function nav(): DefaultTheme.NavItem[] {
	return [
		{ text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
		{ text: 'Resources', link: '/resources/', activeMatch: '/resources/' },
	]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Modding Guide',
			items: [
				{ text: 'Under Construction' },
			]
		},
		{ text: 'Modding Resources', link: '/resources/' }
	]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Modding Resources',
			items: [
				{ text: 'Official Resources', link: '/resources/' },
				{ text: 'Map Projections', link: '/resources/map-projections' },
			]
		},
		{ text: 'Modding Guide', link: '/guide/' }
	]
}

export const en = defineConfig({
	lang: 'en-US',
	title: 'BombSquad Modding',
	themeConfig: {
		nav: nav(),
		sidebar: {
			'/guide/': sidebarGuide(),
			'/resources/': sidebarResources(),
		},
		editLink: {
			pattern: 'https://github.com/bombsquad02420/wiki/edit/main/:path',
			text: 'Edit this page on GitHub',
		},
		footer: {
			message: 'Released under the CC-BY License.',
			copyright: 'Copyright © 2025-present aryan02420',
		},
	},
})
