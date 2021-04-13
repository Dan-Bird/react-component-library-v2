import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import clear from 'rollup-plugin-clear';
import rebasePlugin from 'rollup-plugin-rebase';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    clear({
      targets: ['build/'],
      watch: true,
    }),
    rebasePlugin({ include: ['**/*.woff', '**/*.woff2'] }),
    resolve(),
    postcss({ modules: true }),
    commonjs(),
    // svgr({ ref: true, outDir: 'icons', typescript: true }),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
};
