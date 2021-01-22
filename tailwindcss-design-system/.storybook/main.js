const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    const isProduction = configType === 'PRODUCTION';

    // rules
    const cssRules = config.module.rules.find((rule) => rule.test.test('index.css'));
    cssRules.include = path.resolve(__dirname, '../styles/index.css');
    cssRules.use = [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      { loader: "css-loader", options: { importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, '../styles/postcss.config.js'),
          },
        },
      },
    ];

    // plugins
    if (isProduction) {
      config.plugins.push(new MiniCssExtractPlugin())
    }

    return config;
  },
}