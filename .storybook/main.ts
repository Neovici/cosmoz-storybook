import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	refs: {
		'cosmoz-icons': {
			title: 'Cosmoz Icons Storybook',
			url: 'https://neovici.github.io/cosmoz-icons',
		},
		'cosmoz-dropdown': {
			title: 'Cosmoz Dropdown Storybook',
			url: 'https://neovici.github.io/cosmoz-dropdown',
		},
		'cosmoz-omnitable': {
			title: 'Cosmoz Omnitable Storybook',
			url: 'https://neovici.github.io/cosmoz-omnitable',
		},
		'cosmoz-slider': {
			title: 'Cosmoz Slider Storybook',
			url: 'https://neovici.github.io/cosmoz-slider',
		},
		'cosmoz-input': {
			title: 'Cosmoz Input Storybook',
			url: 'https://neovici.github.io/cosmoz-input',
		},
		'cosmoz-autocomplete': {
			title: 'Cosmoz Autocomplete Storybook',
			url: 'https://neovici.github.io/cosmoz-autocomplete',
		},
		'cosmoz-button': {
			title: 'Cosmoz Button Storybook',
			url: 'https://neovici.github.io/cosmoz-button',
		},
		'cosmoz-charts': {
			title: 'Cosmoz Charts Storybook',
			url: 'https://neovici.github.io/cosmoz-charts',
		},
		'cosmoz-command-menu': {
			title: 'Cosmoz Command Menu Storybook',
			url: 'https://neovici.github.io/cosmoz-command-menu',
		},
		'cosmoz-filter-bar': {
			title: 'Cosmoz Filter Bar Storybook',
			url: 'https://neovici.github.io/cosmoz-filter-bar',
		},
		'cosmoz-image-viewer': {
			title: 'Cosmoz Image Viewer Storybook',
			url: 'https://neovici.github.io/cosmoz-image-viewer',
		},
		'cosmoz-rating': {
			title: 'Cosmoz Rating Storybook',
			url: 'https://neovici.github.io/cosmoz-rating',
		},
		'cosmoz-tabs': {
			title: 'Cosmoz Tabs Storybook',
			url: 'https://neovici.github.io/cosmoz-tabs',
		},
		'cosmoz-tooltip': {
			title: 'Cosmoz Tooltip Storybook',
			url: 'https://neovici.github.io/cosmoz-tooltip',
		},
		'cosmoz-treenode-navigator': {
			title: 'Cosmoz Treenode Navigator Storybook',
			url: 'https://neovici.github.io/cosmoz-treenode-navigator',
		},
	},
};

export default config;
