var webpack = require('webpack');

// markdown conver to html
var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html!markdown"
    }]
  },
  markdownLoader: {
    renderer: renderer
  }
};
