export default {
  mode: 'production',
  entry: process.env.ENTRY || './src/index.js',
  output: {
    filename: 'index-webpack.js',
    module: true,
  },

  // output an esmodule
  experiments: { outputModule: true },
}
