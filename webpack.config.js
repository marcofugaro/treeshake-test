const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  mode: 'production',

  // turn off performance hints
  performance: false,

  optimization: {
    // automatically split vendor and app code
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            beautify: true,
          }
        }
      }),
    ],
  },
}
