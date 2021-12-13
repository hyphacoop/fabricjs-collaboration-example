const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// assets.js
const Assets = require('./assets');

module.exports = {
  entry: "./public/js/app.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "build/[name].bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: Assets.map(asset => ({
        from: `node_modules/${asset}`,
        to: 'public/bower_components/',
      })),
    })
  ]
};
