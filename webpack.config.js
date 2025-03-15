const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "production",// pode ser 'mode:production'
    devtool: "inline-source-map",
    entry: './src/index.ts', 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, // Extrae o CSS nun arquivo separado
                    'css-loader', // Procesa o CSS
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader', // Procesa arquivos TypeScript
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: './javascript/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      
        new MiniCssExtractPlugin({ filename: './css/styles.css' }), // Arquivo CSS final
        new CopyPlugin({
          patterns: [
            { from: "./src/imaxenes", to: "imaxenes" },
            { from: "./src/views", to: "views" },
          ],
        })
    ],
};
