// module.exports = {
//   webpack: function (config) {
//     config.externals = config.externals || {}
//     config.externals['styletron-server'] = 'styletron-server'
//     return config
//   }
// }



const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images');
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');


module.exports = withPlugins(
  [
    withOptimizedImages,
    withFonts,
    withSass,
    withCSS
  ], {
  webpack: function (config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  }
}
);