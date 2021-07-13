export default {
  mode: 'production',
  output: {
    filename: 'index-webpack.js',
    module: true,
  },

  // output an esmodule
  experiments: { outputModule: true },
}
