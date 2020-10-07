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

// Webpack dev server creates two sections in developer tools 'soruces'
// 1. localhost:<PORT> => Actual application running in the port. With help of this, we can able to view the UI in browser.
// 2. webpack:// => Socket connection established between my app and browser.
// What is the use of webpack:// (point 2)?
// With help of socket connection, we are loading all supporting libraries to run our app on certain port number with dev mode supports like hot reloading, mapping the bundled modules to the actual src file... etc. The main purpose of this support libraries to enable debugging mode with more declaritive error messages


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
          },
          { 
            test: /\.css$/, 
            // style-loader but all css into bundle.js. It will not create a separate style
            use: ['style-loader', {loader:'css-loader', options: {url:false}}],
          },
          { 
            test: /\.scss$/, 
            use: ['style-loader', {loader:'css-loader', options: {url:false}}, 'sass-loader'],
          }
        ]
      },
      mode: isProd && 'production' || 'development',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
      }
    
    };
}
