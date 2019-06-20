// TODO: proper postcss config
const postcssPresetEnv = require('postcss-preset-env');

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      postcssPresetEnv({ stage: 3 }), // autoprefix css for browser support
      require('cssnano') // minify css
    ]
  };

  return;
}

module.exports = {};