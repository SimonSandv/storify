module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    //"@storybook/addon-links",
    //"@storybook/addon-viewport",
    //"@storybook/addon-measure",
    //"@storybook/addon-outline",
    //"@storybook/addon-backgrounds",
    //"@storybook/addon-docs",
    //"@storybook/addon-actions",
    //"@storybook/addon-controls",
    //"@storybook/addon-toolbars",
    "@storybook/addon-storysource",
    "@storybook/preset-scss",
    "@etchteam/storybook-addon-status",
    "storybook-dark-mode",
    "storybook-addon-designs",
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}