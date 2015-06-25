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

## Override default markdown primitive options

Simply add query params by javascript or configuration, example:

```javascript
{
    module: {
        loaders: {
            { test: /\.md$/, loader: "html!markdown?gfm=false" },
        ]
    }
}
```
