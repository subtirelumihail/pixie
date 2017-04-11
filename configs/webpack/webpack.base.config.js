const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { ROOT } = require('./constants');

const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = function (env) {
  return {
    output: {
      path: path.join(__dirname, `${ROOT.BUILD}`),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        components: path.resolve(__dirname, `${ROOT.SOURCE}/components`),
        containers: path.resolve(__dirname, `${ROOT.SOURCE}/containers`),
        layouts: path.resolve(__dirname, `${ROOT.SOURCE}/layouts`),
        routes: path.resolve(__dirname, `${ROOT.SOURCE}/routes`),
        utils: path.resolve(__dirname, `${ROOT.SOURCE}/utils`),
        api: path.resolve(__dirname, `${ROOT.SOURCE}/api`),
        store: path.resolve(__dirname, `${ROOT.SOURCE}/store`),
        lib: path.resolve(__dirname, `${ROOT.SOURCE}/lib`),
        reducers: path.resolve(__dirname, `${ROOT.SOURCE}/reducers`)
      }
    },
    module: {
      rules: [{
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: env === 'prod',
        }
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hello',
        template: 'src/index.html',
        chunksSortMode: 'dependency'
      }),
      extractCSS
    ]
  };
};
