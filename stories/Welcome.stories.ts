import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta = {
	title: 'Welcome',
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Overview: Story = {
	render: () => `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
      html {
        font-family: 'Inter', sans-serif;
      }
    </style>
    <div style="padding: 2rem; text-align: center;">
      <h1>Welcome to Cosmoz Components</h1>
    </div>
  `,
};
