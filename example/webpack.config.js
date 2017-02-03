var webpack = require("webpack");

// markdown conver to html
var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
        rules: [{
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: require.resolve("../index.js"),
                    options: {
                        renderer
                    }
                }
            ]
        }]
    }
};


