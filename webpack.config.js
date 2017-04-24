// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/source',
  devtool: 'source-map',
  entry: {
    app: './js/app.js'
  },
  output: {
    //publicPath: '',
    filename: 'assets/js/[name].bundle.js',
    path: __dirname + '/build'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "assets/js/common.js",
      minChunks: 2
     })
    //,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true
    // })
    // new FaviconsWebpackPlugin('./favicon.png')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  }
};

//https://habrahabr.ru/post/309306/
