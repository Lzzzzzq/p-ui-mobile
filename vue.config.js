const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()

    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@NewsUI', resolve('components'))
      .set('@vc', resolve('src/components'))
  }
}
