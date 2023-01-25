const path = require('path');

module.exports = {
  //mode: 'development',
  entry: './src/index.js', // 진입점
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
  },
};