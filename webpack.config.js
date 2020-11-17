const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack config should be return as a function or an object

//  Why webpack dev server is required for development even webpack does watch and dev build?
//   1. It will create the actual output file in output folder and it is a costlier process when application grows larger.
//   2. It will not support Hot reloading in browser.

//  What is hot reloading?
//   In simple, don't reload the full page after the source file changes, just reload only the part of code which is changed. When we update the component local state will be preserved.

// How hot reloading is working?
// Hot reloading is nothing but Injecting the new version of source files during the runtime
// whenever we update the Component, the will be preserved and wont reset


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

// ***THING TO IMPROVE IN WEBPACK ****//
// Code splitting - Will multiple bundle js
// Minifying strategy - Webpack 4 itself will provide default minimization. We have add configuration to minimize code in more efficient way. eg: removing console log. Yes - UglifyJSPlugin, TerserPlugin.
// CSS extraction - At the moment, all the css bundled into single file called bundle.js. With help css extract plugin, we can extract css to seperate file. Yes - ExtractCSSPlugin, MiniCSSExtractPlugin
// Templating strategy - html-webpack-plugin

// Plugings
// 1.HtmlWebpackPlugin
// 2.CopyWebpackPlugin
// 3.DefinePlugin
// 4.HotModuleReplacementPlugin
// 5.IgnorePlugin
// 6.MiniCssExtractPlugin
// 7.NoEmitOnErrorsPlugin
// 8.TerserPlugin
// 9.ProvidePlugin


module.exports = (env) => {  
    const isProd = env && env.production;
    console.log(env)
    return {
      // watch: isProd && false || true,   Same code using the negation
      watch: !isProd,
      entry: './src/index.js',
      output: {
        // output.path --> creates the actual file -- used by modules, plugins for transfiling the source to output
        path: path.resolve(__dirname, 'public'),
        filename: '[hash].bundle.js'
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
        port: 3000,
        hot:true
      },
      plugins: [
         new HtmlWebpackPlugin({
            // By default file name will be index.html if you do not mention
            filename: 'index.html',
            title: 'TSK',
            meta: {
              viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
              description: 'Personal-task-manger-description'
            },
            template: path.resolve(__dirname, 'template.html')
         }),
        new webpack.DefinePlugin({
          MAINTAIN: false,
          "process.env.CHECKING": false
        }),
        new webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom',
          PropTypes: 'prop-types'
        }),
       new webpack.NoEmitOnErrorsPlugin() // Ti is depreciated 
      ],
      // optimization: {    // By default it will be false --> At the compilation if the webpack finds any error, it will not emit bundle.js file.
      //    emitOnErrors: false
      // }
    
    };
}
