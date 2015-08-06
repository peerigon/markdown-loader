markdown-loader
===============

markdown-loader for webpack using [marked](https://github.com/chjj/marked).


## Setup

[![npm status](https://nodei.co/npm/markdown-loader.svg?downloads=true&stars=true)](https://npmjs.org/package/markdown-loader)

[![dependencies](https://david-dm.org/peerigon/batch-replace.svg)](http://david-dm.org/peerigon/markdown-loader)
[![devDependency Status](https://david-dm.org/peerigon/batch-replace/dev-status.svg)](https://david-dm.org/peerigon/markdown-loader#info=devDependencies)

## Usage 

```javascript
var html = require("html!markdown!./README.md");
```

### Recommended Configuration

Since marked's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader). 

```javascript
{
    module: {
        loaders: {
            { test: /\.md$/, loader: "html!markdown" },
        ]
    }
}
```

## Options

[marked](https://github.com/chjj/marked)-options are passed via query params:


```javascript
{
    module: {
        loaders: {
            { test: /\.md$/, loader: "html!markdown?gfm=false" },
        ]
    }
}
```

### Custom renderer

In order to specify [custom renderers](https://github.com/peerigon/markdown-loader/issues/5), simply set the `markdownLoader.renderer`-option on your webpack options. You can also change the options' key
with a query parameter: `"markdown?config=markdownLoaderCustomConfig"`.

```javascript
// webpack.config.js

var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
    ...
    markdownLoader: {
        renderer: renderer
    }
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)