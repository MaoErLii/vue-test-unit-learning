var path = require('path')
var webpack = require('webpack')
var { VueLoaderPlugin } = require('vue-loader')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production'? 'production' : 'development',
  entry: {
    index: path.resolve(__dirname, './src/main.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules:  [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo:true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '测试',
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.ejs'),
      favicon: path.resolve(__dirname, './public/favicon.ico')
    })
  ]
}

if(process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map',
  module.exports.plugins = (module.exports.plugins || []).concat(
    [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: 'production'
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ]
  )
}
