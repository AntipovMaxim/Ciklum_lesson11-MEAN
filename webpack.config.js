var webpack = require('webpack');
var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
    entry: ['./frontend/app.js', './frontend/style/style.scss'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },


    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=1000000&&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1000000&name=[name].[ext]' },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'raw'}
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: '../src/index.html',
    //         template: 'index.html'
    //     })
    // ],
    eslint: {
        configFile: '.eslintrc'
    }
};



module.exports = webpackConfig;
