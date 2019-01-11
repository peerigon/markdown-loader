markdown-loader
===============

markdown-loader for webpack using [marked](https://github.com/markedjs/marked).

[![](https://img.shields.io/npm/v/markdown-loader.svg)](https://www.npmjs.com/package/markdown-loader)
[![install size](https://badgen.net/packagephobia/install/markdown-loader)](https://packagephobia.now.sh/result?p=markdown-loader)
[![](https://img.shields.io/npm/dm/markdown-loader.svg)](https://www.npmjs.com/package/markdown-loader)
[![Dependency Status](https://david-dm.org/peerigon/markdown-loader.svg)](https://david-dm.org/peerigon/markdown-loader)
[![Build Status](https://travis-ci.org/peerigon/markdown-loader.svg?branch=master)](https://travis-ci.org/peerigon/markdown-loader)

## Installation

`npm install markdown-loader`

## [Changelog](CHANGELOG.md) 

## Usage

Since marked's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader).

### Webpack 2+

```javascript
{
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            }]
    }
}
```

### Options

Pass your marked [options](https://marked.js.org/#/USING_ADVANCED.md#options) as shown above.
In order to specify [custom renderers](https://github.com/peerigon/markdown-loader/issues/5), set the `options.renderer`-option in your webpack config.

```javascript
// webpack.config.js

const marked = require("marked");
const renderer = new marked.Renderer();

return {
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            }]
    }
}
```
## License

MIT (http://www.opensource.org/licenses/mit-license.php)

## Sponsors

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
