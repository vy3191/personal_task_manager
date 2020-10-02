const path = require('path');
// webpack config should be return as a function or an object


module.exports = (env) => {  
    const isProd = env && env.production;
    console.log(env)
    return {
      // watch: isProd && false || true,   Same code using the negation
      watch: !isProd,
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
      mode: isProd && 'production' || 'development'
    
    };
}
