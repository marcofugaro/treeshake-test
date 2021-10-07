export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index-webpack.js',
    module: true,
  },

  // output an esmodule
  experiments: { outputModule: true },
}
