"use strict";

const marked = require("marked");
const loaderUtils = require("loader-utils");

const DEFAULT_OPTIONS = {
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
    const options = Object.assign(DEFAULT_OPTIONS, loaderUtils.parseQuery(this.query));

    this.cacheable();

    marked.setOptions(options);

    return marked(markdown);
};
