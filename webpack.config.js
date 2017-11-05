var path = require("path");

var DIST_DIR   = path.join(__dirname, "dist"),  
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {  
    context: CLIENT_DIR,

    entry: "./main",

    output: {
        path:     DIST_DIR,
        filename: "bundle.js"
    },

   module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
