const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { MAIN } = require('./constants');

const commonConfig = require('./webpack.base.config.js');

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    entry: {
      main: ['babel-polyfill', MAIN.INDEX] // the entry point of our app
    },
    output: {
      filename: '[name].[chunkhash].bundle.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),
      new webpack.NormalModuleReplacementPlugin(
        /^\.\/Routes$/,
        './RoutesAsync'
      )
    ]
  });
};
