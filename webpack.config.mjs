import TerserPlugin from 'terser-webpack-plugin'

export default {
  mode: 'production',
  entry: process.env.ENTRY || './src/index.js',
  output: {
    filename: 'index-webpack.js',
    module: true,
  },

  // output an esmodule
  experiments: { outputModule: true },

  // disable size warnings
  stats: { warnings: false },

  // disable minification
  optimization: {
    minimize: false,
  },
}
