const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.jsx', '.js', '.json', '.css', '.scss']
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: 'babel-loader' 
      }
    ]
  },
  mode: 'development'

};
