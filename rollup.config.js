import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import clear from 'rollup-plugin-clear';
import rebasePlugin from 'rollup-plugin-rebase';
// import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

const clearPlugin = [
  clear({
    targets: ['build/'],
    watch: true,
  }),
];

const pluginsArray = [
  peerDepsExternal(),
  rebasePlugin({ include: ['**/*.woff', '**/*.woff2'] }),
  resolve(),
  postcss({ modules: true }),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  terser(),
];

export default {
  input: {
    component: 'src/components/index.ts',
    designSystem: 'src/components/index.ts',
    index: 'src/index.ts',
  },
  output: [
    {
      dir: 'build/',
      entryFileNames: '[name].js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'build/',
      entryFileNames: '[name].module.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: pluginsArray,
};
