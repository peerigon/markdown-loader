"use strict";

var marked = require("marked");
var loaderUtils = require("loader-utils");
var assign = require("object-assign");

// default option
var options = {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
};

module.exports = function (markdown) {
    // merge params and default config
    var config = assign(options, loaderUtils.parseQuery(this.query));
    this.cacheable();
    marked.setOptions(config);
    return marked(markdown);
};
