const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const vue = require('rollup-plugin-vue')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const json = require('rollup-plugin-json')
const moduleMap = require('./module-map')
const fs = require('fs-extra')

const componentDir = 'components'
const toDir = 'lib'
const external = ['core-js', 'classnames', 'babel']

const inputOpt = () => {
  const conf = {
    input: {
      ...moduleMap
    },
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
        extract: toDir + '/[name]/style/index.css',
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
      json()
    ]
  }
  return conf
}

const outputOpe = () => ({
  dir: toDir,
  format: 'es',
  entryFileNames: '[name]/index.js',
  exports: 'named'
})

const copyStyle = () => {
  for (let item in moduleMap) {
    fs.copy(`${componentDir}/${item}/style`, `${toDir}/${item}/style`)
      .then(() => {})
      .catch(e => {})
  }
  fs.copy(`${componentDir}/style`, `${toDir}/style`)
}

const build = async () => {
  const bundle = await rollup.rollup(inputOpt())
  await bundle.write(outputOpe())
  copyStyle()
}

build()
