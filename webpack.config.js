var path = require('path');
var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        inline: true,
        contentBase: './public',
        host: 'localhost',
        port: 3000,
        headers:          { 'Access-Control-Allow-Origin': '*' },
        https:            false,
        disableHostCheck: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/app.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    optimization: {
      minimize: true,
      minimizer: [ new TerserPlugin() ],
    }
};
