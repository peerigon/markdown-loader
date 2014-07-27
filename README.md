markdown-loader
===============

markdown loader for webpack


## Usage 

```javascript
var html = require("html!markdown!./README.md");
```

## Recommended Configuration

Best served with html-loader. 

```javascript
{
    module: {
        loaders: {
            { test: /\.md$/, loader: "html!markdown" },
        ]
    }
}
```
