const path = require('path')
console.log("webpack path",path);
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const dotenv = require('dotenv').config({path: __dirname + '/.env'})
// const dotenv = require('dotenv').config({path: '.env'});
// console.log(process.env);

module.exports = {
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map.js'
  },
  devtool: 'source-map',
  devServer: {
    port: 8080
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: 'babel-loader' },
      exclude: path.resolve('node_modules')
    }, {
      test: [/\.scss$/,/\.css$/],
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        { loader: 'file-loader' }
      ]
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      use: [
        { loader: 'file-loader' }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      xhtml: true
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV || 'production')
    })
    // new webpack.DefinePlugin({
    //   PRODUCTION: process.env.NODE_ENV === JSON.stringify('production')
    // })
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('development')
    // })
  ],
  node: {
    fs: 'empty',
    net: 'empty'
  },
  target: 'web'
}
