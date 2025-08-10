module.exports = {
  publicPath: '/',
  lintOnSave: false,
  parallel: false,
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  chainWebpack: config => {
    // Disable TypeScript checking
    config.plugins.delete('fork-ts-checker')
  }
}