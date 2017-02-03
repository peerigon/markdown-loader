markdown-loader
===============

markdown-loader for webpack using [marked](https://github.com/chjj/marked).

## Setup

[![npm status](https://nodei.co/npm/markdown-loader.svg?downloads=true&stars=true)](https://npmjs.org/package/markdown-loader)

[![dependencies](https://david-dm.org/peerigon/batch-replace.svg)](http://david-dm.org/peerigon/markdown-loader)
[![devDependency Status](https://david-dm.org/peerigon/batch-replace/dev-status.svg)](https://david-dm.org/peerigon/markdown-loader#info=devDependencies)

## Usage

Since marked's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader).

### Webpack 2

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

Simply pass your marked [options](https://github.com/chjj/marked#options-1) as shown above.
In order to specify [custom renderers](https://github.com/peerigon/markdown-loader/issues/5), simply set the `options.renderer`-option on your webpack options.

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
