// module.exports = {
//   baseUrl: undefined,
//   outputDir: undefined,
//   assetsDir: undefined,
//   runtimeCompiler: undefined,
//   productionSourceMap: undefined,
//   parallel: undefined,
//   css: undefined,
// }

module.exports = {
  devServer: {
    // proxy: 'http://api.douban.com/v2'
    proxy: {
      '/api': {
        target: 'http://www-local.comic.com/api',
        ws: true,
        changeOrigin: true,
        autoRewrite: true,
        cookieDomainRewirte: true,
        pathRewrite: {
          '^/api/': '/'
        }
      }
    }
  }
}