// @TODO write a plugin that watches template files for changes and updates css, then add purgecss back

// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./src/**/*.js'],
//   css: ['./src/css/tailwind.css'],
//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// });

const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    postcssPresetEnv({
      festures: {
        'custom-media-queries': true,
        'nesting-rules': true
      }
    })
  ]
}
