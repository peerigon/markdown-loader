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
    var query = assign(loaderUtils.parseQuery(this.query), options);
    var configKey = query.config || "markdownLoader";

    if (this.options[configKey]) {
        // If present, add custom renderer
        query.renderer = this.options[configKey].renderer;
    }

    this.cacheable();

    marked.setOptions(query);

    return marked(markdown);
};
