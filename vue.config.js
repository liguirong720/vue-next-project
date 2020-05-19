const isProduction = process.env.NODE_ENV !== 'development'

const cdnConfig = {
  externals: {
    vue: 'Vue',
    vuex: 'vuex',
    'vue-router': 'VueRouter',
    axios: 'axios'
  },
  css: [],
  js: [
    'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
    'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
    'https://cdn.bootcss.com/axios/0.19.2/axios.min.js'
  ]
}

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      if (isProduction) {
        args[0].cdn = cdnConfig
      }
      return args
    })
  },
  configureWebpack: config => {
    if (isProduction) {
      config.externals = cdnConfig.externals
    }
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minSize: 0,
            minChunks: 1,
            priority: 100,
            maxInitialRequests: 5
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]common/,
            name: 'common',
            minSize: 0,
            minChunks: 2,
            priority: 60,
            maxInitialRequests: 5
          }
        }
      }
    }
  }
}
