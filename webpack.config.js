const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode,
    entry: {
      app: ['@babel/polyfill', path.join(__dirname, 'src', 'index')]
    },
    devtool: isDev ? 'source-map' : false,
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    resolve: {
      extensions: ['.js', '.css', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
          exclude: /node-modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'index.html',
        showErrors: isDev
      })
    ]
  };
};
