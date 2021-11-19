const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:6].js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].js.map',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    disableHostCheck: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
    host: 'localhost',
    overlay: true,
    stats: {
      // normal: false,
      cacheModules: false,
      runtimeModules: false,
      dependentModules: false,
      groupAssetsByChunk: false,
      groupAssetsByEmitStatus: false,
      groupAssetsByInfo: false,
      groupModulesByAttributes: false,
      hash: false,
      version: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      // source: false,
      publicPath: '/',
    },
    /* open: true // can open new browser with the localhost project */
  },
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: ['defaults'],
                  modules: false,
                },
              ],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic', // we don't need the import React from 'react' for use the runtime jsx
                },
              ],
            ],
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|ttf|woff|eot|gif|svg|mp4|mvn|webm|ico)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
            name: '[name].[ext]',
            emitFile: true,
            esModule: false,
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      BASE_URL_PRODUCTION: 'https://shorten-url-sword.herokuapp.com/api',
      BASE_URL_DEVELOPMENT: 'http://localhost:3100/api',
    }),
    // new webpack.ProgressPlugin({
    //   activeModules: true,
    //   handler: function () {
    //     console.log('executed')
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons',
    },
  },
}
