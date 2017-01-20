var debuga = process.env.NODE_ENV !== "production";
var webpack = require('webpack');


module.exports ={
    
    
    context: __dirname,
    devtool: debuga ? "inline-sourcemap" : null,
    entry: __dirname+"/src/js/vendor/client.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules | bower_components)/,
            loader: 'babel-loader',
            query:{
            presets: ['react','es2015','stage-0'],
            plugins: ['react-html-attrs']
            }
        }
        ]
    },
    output: {
    
    path: __dirname + "/js",
    filename: "scripts.min.js"  
},
    plugins: debuga ? []: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OcurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ]
}