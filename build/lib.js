const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const vue = require('rollup-plugin-vue')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')

const external = ['core-js', 'classnames', 'babel']

const inputOpt = (name) => {
  const conf = {
    input: 'components/' + name + '.js',
    external: id => external.some(e => id.indexOf(e) === 0),
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.vue', '.css', '.less']
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        plugins: ['@babel/plugin-external-helpers']
      }),
      postcss({
        plugins: [autoprefixer, cssnano],
        extract: 'lib/style.css',
        minimize: true
      }),
      vue({
        compileTemplate: true,
        htmlMinifier: {
          customAttrSurround: [[/@/, new RegExp('')], [/:/, new RegExp('')]],
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      json(),
      terser()
    ]
  }
  return conf
}

const outputOpe = () => ({
  dir: 'lib',
  format: 'es',
  exports: 'named'
})

const build = async (name) => {
  const bundle = await rollup.rollup(inputOpt(name))
  await bundle.write(outputOpe(name))
}

build('index')
