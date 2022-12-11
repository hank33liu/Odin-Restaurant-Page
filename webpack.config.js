const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //remove for production
    entry: {
        main: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map', //remove for production
    devServer: {
        static: './dist',
    }, //remove for production
    plugins: [
        new HtmlWebpackPlugin({
            title: `Mama Mia's!!!`,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};