markdown-loader
===============

markdown loader for webpack


## Usage 

```javascript
var html = require("markdown!./README.md");
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
