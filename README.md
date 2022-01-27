# markdown-loader

**markdown-loader for webpack using [marked](https://github.com/markedjs/marked).**

[![Version on NPM](https://img.shields.io/npm/v/markdown-loader?style=for-the-badge)](https://www.npmjs.com/package/markdown-loader)
[![Semantically released](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release)
[![Monthly downloads on NPM](https://img.shields.io/npm/dm/markdown-loader?style=for-the-badge)](https://www.npmjs.com/package/markdown-loader)<br>
[![License](https://img.shields.io/npm/l/markdown-loader?style=for-the-badge)](./LICENSE)

## Installation

`npm install markdown-loader`

Minimal requirements:

- Node >=12.22.9
- webpack >=5.0.0

## Usage

Since marked's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader).

```javascript
// webpack.config.js
export default {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              // Pass options to marked
              // See https://marked.js.org/using_advanced#options
            },
          },
        ],
      },
    ],
  },
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

## Sponsors

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
