const path = require('path');

module.exports = {
  components: 'components/**/*.{js,jsx,ts,tsx}',
  ignore: ['**/*.stories.{js,tsx,ts,tsx}'],
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: "css-loader", options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: path.resolve(__dirname, 'styles/postcss.config.js'),
                },
              },
            },
          ],
        },
      ]
    },
  },
}