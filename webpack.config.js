const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  module: {
    rules: [
      // Rule for processing JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Rule for processing CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader', // or 'url-loader' depending on your preference
            options: {
              name: '[name].[ext]',
              outputPath: path.resolve(__dirname, 'dist'), // specify the output directory for images
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // path to your existing HTML file
      inject: 'body', // or 'head' depending on where you want to inject the script tags
    }),
  ],
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
  },
};
