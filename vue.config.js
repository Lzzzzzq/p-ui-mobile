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
  }
}
