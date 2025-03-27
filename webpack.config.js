const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

console.log("🔄 Modo:", isDevelopment ? "Desarrollo (Hot Reloading)" : "Producción (MiniCssExtractPlugin)");

module.exports = {
    mode: isDevelopment ? "development" : "production",
    devtool: "inline-source-map",
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
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
        filename: 'javascript/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        hot: true, // 🔥 Activa HMR (Hot Module Replacement)
        open: true,
        watchFiles: ["src/css/**/*.css", "src/views/**/*.html"], // 👀 Asegura que observa los cambios en CSS y HTML
        liveReload: true, // 🔄 Recarga la página automáticamente cuando detecta cambios
    },    
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "css/paxina.settings/index.css" }),
        new CopyPlugin({
            patterns: [
                { from: "./src/css", to: "css" }, // 👈 Copia TODOS los CSS incluyendo main.css
                { from: "./src/imaxenes", to: "imaxenes" },
                { from: "./src/views", to: "views", globOptions: { ignore: ["**/axustes.html"] } },
                { from: "./controladores/views", to: "javascript" }
            ],
        }),
        
        new HtmlWebpackPlugin({
            template: "./src/views/axustes.html",
            filename: "views/axustes.html",
            inject: "body"
        }),
    ],
};
