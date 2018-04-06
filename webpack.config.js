const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',

  performance: {
    hints: false
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    watchContentBase: true,
    port: 9090,
    stats: 'errors-only'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  entry: ['./index.jsx'],
  output: {
	  path: path.resolve(__dirname, './'),
    filename: 'main.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new CopyWebpackPlugin([
      { from: './node_modules/graphql-voyager/dist/voyager.worker.js' }
    ])
  ]
}
