var webpack = require("webpack");

// markdown conver to html
var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  module: {
        rules: [{
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    //those options are optional
                    options: {
                        renderer
                    }
                }
            ]
        }]
    }
};


