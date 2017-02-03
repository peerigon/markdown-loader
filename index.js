"use strict";

const marked = require("marked");
const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    // merge params and default config
    const options = loaderUtils.parseQuery(this.query);

    this.cacheable();

    marked.setOptions(options);

    return marked(markdown);
};
