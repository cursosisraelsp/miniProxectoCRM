const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",// pode ser 'mode:production'
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
            } ,
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
        new HtmlWebpackPlugin({
            filename: 'index.html', // Arquivo de salida
            template: './src/index.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/home.html', // Arquivo de salida
            template: './src/views/home.html', // Plantilla HTML
          }),,
          new HtmlWebpackPlugin({
            filename: './views/app.html', // Arquivo de salida
            template: './src/views/app.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/no-user.html', // Arquivo de salida
            template: './src/views/no-user.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/logueo.html', // Arquivo de salida
            template: './src/views/logueo.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/axustes.html', // Arquivo de salida
            template: './src/views/axustes.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/cesta.html', // Arquivo de salida
            template: './src/views/cesta.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/clientes.html', // Arquivo de salida
            template: './src/views/clientes.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/customers.html', // Arquivo de salida
            template: './src/views/customers.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/graficas.html', // Arquivo de salida
            template: './src/views/graficas.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/invoices.html', // Arquivo de salida
            template: './src/views/invoices.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/productos.html', // Arquivo de salida
            template: './src/views/productos.html', // Plantilla HTML
          }),
          new HtmlWebpackPlugin({
            filename: './views/new_product.html', // Arquivo de salida
            template: './src/views/new_product.html', // Plantilla HTML
          }),
      
        new MiniCssExtractPlugin({ filename: './css/[name].css' }), // Arquivo CSS final
        new CopyPlugin({
          patterns: [
            { from: "./src/imaxenes", to: "imaxenes" },
          ],
        })
    ],
};
