// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    // print: './src/print.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
               test: /\.m?js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env']
                   }
               }
           },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Game-Rock-Scissors-Paper',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      failOnError: true,
    }),
  ],
  output: {
    filename: 'app.js',
    // filename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
