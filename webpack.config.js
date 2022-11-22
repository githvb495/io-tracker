const path = require('path');
const isProduction = process.env.NODE_ENV == 'development';
const CopyPlugin = require("copy-webpack-plugin");              // Copy index.html to /prod
const stylesHandler = 'style-loader';



const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'main.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'prod'),
    },
    open: true,
    host: 'localhost',
    hot: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "index.html" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
