const path = require('path');
// webpack config should be return as a function or an object

//  Why webpack dev server is required for development even webpack does watch and dev build?
//   1. It will create the actual output file in output folder and it is a costlier process when application grows larger.

//   2. It will not support Hot reloading in browser.
//  What is hot reloading?
//   In simple, don't reload the full page after the source file changes, just reload only the part of code which is changed.

//  3.Is it possible to run application using webpack?
//    Yes, it is possible to develop application only for small apps and it will utilize more system
//  resources like RAM and CPU - reason is - we actually writing a file whenever make a change.

// 4. Express - is a framework which is used to create backend service and its routes.
// Node is single threaded, So, express module simplifies the development work and make it easier to write secure and faster applications.

//5. What is webpack-dev-server?
// webpack-dev-server(Express.js) and implemented Socket.



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
      mode: isProd && 'production' || 'development',
      devServer: {
        contentBase: path.join(__dirname, 'public')
      }
    
    };
}
