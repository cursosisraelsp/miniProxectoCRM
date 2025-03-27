const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // O "production" si es necesario
    devtool: "inline-source-map", // Fuente de mapa para desarrollo
    entry: './src/index.ts', // Punto de entrada para TypeScript
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, // Extrae el CSS en un archivo separado
                    'css-loader', // Procesa el CSS
                ],
            },
            {
                test: /\.ts$/, // Archivos TypeScript
                use: 'ts-loader', // Procesador de TypeScript
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // Maneja imágenes como recursos
            },
        ],
    },
    
    resolve: {
        extensions: ['.ts', '.js'], // Resolución para TypeScript y JavaScript
    },

    output: {
        filename: './javascript/bundle.js', // Nombre del archivo de salida para JS
        path: path.resolve(__dirname, 'dist'), // Directorio de salida
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html', // Archivo de salida para logueo.html
            template: './src/index.html', // Plantilla HTML para logueo
        }),
        new HtmlWebpackPlugin({
            filename: './views/no-user.html', // Archivo de salida para logueo.html
            template: './src/views/no-user.html', // Plantilla HTML para logueo
        }),
        new HtmlWebpackPlugin({
            filename: './views/logueo.html', // Archivo de salida para logueo.html
            template: './src/views/logueo.html', // Plantilla HTML para logueo
        }),
        new HtmlWebpackPlugin({
            filename: './views/invoices.html', // Archivo de salida para invoices.html
            template: './src/views/invoices.html', // Plantilla HTML para invoices
        }),
        new HtmlWebpackPlugin({
            filename: './views/tablasTable.html', // Archivo de salida para invoices.html
            template: './src/views/tablasTable.html', // Plantilla HTML para invoices
        }),
        new HtmlWebpackPlugin({
            filename: './views/app.html', // Archivo de salida para invoices.html
            template: './src/views/app.html', // Plantilla HTML para invoices
        }),
        new HtmlWebpackPlugin({
            filename: './views/grid.html', // Archivo de salida para invoices.html
            template: './src/views/grid.html', // Plantilla HTML para invoices
        }),
        new MiniCssExtractPlugin({ filename: 'css/[name].css' }), // Archivo CSS final
        new CopyPlugin({
            patterns: [
                { from: "./src/imaxenes", to: "imaxenes" }, // Copiar imágenes
            ],
        }),
    ],
};
