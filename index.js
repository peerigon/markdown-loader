"use strict";

const marked = require("marked");
const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    // merge params and default config
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    marked.setOptions(options);

    return (typeof options.callback === 'function') ? marked(markdown, options.callback) : marked(markdown);
};
