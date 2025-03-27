const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const viewPages = [
  { name: 'customers', css: 'styles_invoice' },
  { name: 'home', css: 'styles' },
  { name: 'invoices', css: 'styles_invoice' },
  { name: 'newinvoices', css: 'styles_invoice' }
];

const htmlPlugins = viewPages.map(page => new HtmlWebpackPlugin({
  filename: `./views/${page.name}.html`,
  template: `./src/views/${page.name}.html`,
  chunks: [page.css]
}));

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: './src/index.ts',
    ...Object.fromEntries(viewPages.map(page => [page.css, `./src/css/${page.css}.css`])),
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    ...htmlPlugins,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new CopyPlugin({
      patterns: [
        { from: "./src/imaxenes", to: "imaxenes" }
      ],
    })
  ]
};
