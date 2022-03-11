const path = require('path')
var WebpackRuntimePublicPathPlugin = require('webpack-runtime-public-path-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const noMock = process.env.NODE_ENV !== 'development' || process.env.NOMOCK==='true'

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        '@api-mock': noMock ? resolve('src/empty') : resolve('src/api-mock'),
        'axios-mock-adapter': noMock ? resolve('src/empty') :
          'axios-mock-adapter/dist/axios-mock-adapter.min.js'
      }
    },
    output: {
      jsonpFunction: 'cintaBumiWebpackJsonp'
    },
    externals: {
      // Use external version of Vue
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vue-resource': 'VueResource',
      'vuex': 'Vuex',
      'vue-i18n': 'VueI18n',
      'axios': 'axios',
      '@blibli/dls': 'Blue'
    },
    plugins: [
      new WebpackRuntimePublicPathPlugin({
        runtimePublicPath: 'window[\'_cinta-bumi_staticPublicPath\']()'
      })
    ],
  },
  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: 10035,
    public: 'http://localhost:10001',
    publicPath: '/cinta-bumi/',
    sockPath: '/cinta-bumi-sockjs/',
    injectClient: true
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks'),
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 2048 }))
  },
  assetsDir: 'static'
}
