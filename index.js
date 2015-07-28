/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author peerigon UG @peerigon
 */

var marked = require('marked');
var loaderUtils = require('loader-utils');
var assign = require("object-assign");

var renderer = new marked.Renderer();
var headingCounts = {};

renderer.heading = function(text, level) {
    var encodedText = encodeURIComponent(text);
    headingCounts[encodedText] = ++headingCounts[encodedText] || 1;
    if (headingCounts[encodedText] > 1) {
        encodedText += '-' + headingCounts[encodedText];
    }
    return '<h' + level + ' id="' + encodedText + '">' + text + '</h' + level + '>';
};

// default option
var options = {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
};

module.exports = function(markdown) {
    // merge params and default config
    var config = assign(options, loaderUtils.parseQuery(this.query));
    this.cacheable();
    marked.setOptions(config);
    return marked(markdown);
};
