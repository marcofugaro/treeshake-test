import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

export default {
  input: process.env.ENTRY || './src/index.js',
  plugins: [
    nodeResolve(),
    terser(),
    filesize(),
  ],
  output: {
    file: './dist/index-rollup.js',
  },
}