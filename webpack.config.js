const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
