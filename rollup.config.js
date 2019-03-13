import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
// import { terser } from 'rollup-plugin-terser'
import json from 'rollup-plugin-json'
import copy from 'rollup-plugin-copy'

const libDir = 'lib'
const libName = 'p-ui-mobile'

export default {
  input: 'components/index.js',
  output: {
    file: libDir + '/' + libName + '.js',
    // dir: libDir,
    format: 'es'
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.vue', '.css', '.less']
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    postcss({
      plugins: [autoprefixer, cssnano],
      extract: libDir + '/' + libName + '.css',
      minimize: true
    }),
    vue({
      css: false
    }),
    // terser(),
    json(),
    copy({
      'components/_util/iconfont/iconfont.eot': libDir + '/' + 'iconfont.eot',
      'components/_util/iconfont/iconfont.svg': libDir + '/' + 'iconfont.svg',
      'components/_util/iconfont/iconfont.ttf': libDir + '/' + 'iconfont.ttf'
    })
  ]
}
