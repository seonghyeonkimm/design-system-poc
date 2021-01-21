const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')({ config: path.resolve(__dirname, 'tailwind.config.js') }),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' }),
  ]
}