var webpack = require('webpack')

module.exports = {
  pwa: {
    name: 'MEGABoominator',
    themeColor: '#FF3D02'
  },
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-IE/)
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          implementation: require('sass'),
          fiber: require('fibers')
        }
      }
    }
  }
}
