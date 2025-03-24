const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",

  // ❗ No hay entrada si no estás usando JS/TS de momento
  entry: {},

  output: {
    filename: 'javascript/[name].js', // se generará solo si usas entrada después
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imaxenes/[name][ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    new CopyPlugin({
      patterns: [
        { from: 'src/views', to: 'views' },
        { from: 'src/css', to: 'css' },
        { from: 'src/imaxenes', to: 'imaxenes' },
      ],
    }),
  ],
};
