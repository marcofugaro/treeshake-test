import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    terser(),
  ],
  output: {
    file: './dist/index-rollup.js',
  },
}