module.exports = {
  stories: [
    '../src/ChatEngine/stories.mdx', // Default Story
    '../src/**/stories.@(ts|tsx|js|jsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
