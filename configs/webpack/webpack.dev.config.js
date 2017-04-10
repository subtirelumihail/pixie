const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { MAIN } = require('./constants');

const commonConfig = require('./webpack.base.config.js');

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      MAIN.INDEX
    ],
    devtool: 'cheap-module-eval-source-map',
    output: {
      filename: '[name].[hash].bundle.js',
      sourceMapFilename: '[name].map',
      publicPath: '/'
    },
    stats: 'minimal',
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],
    devServer: {
      port: 8080,
      host: 'localhost',
      hot: true,
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: '/'
    }
  });
};
