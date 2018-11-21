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
        target: 'http://localhost:8000/api',
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