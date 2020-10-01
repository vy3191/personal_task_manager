const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.jsx', '.js', '.json', '.css', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/')
    }
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
