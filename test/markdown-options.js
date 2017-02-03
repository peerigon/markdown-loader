module.exports = {
    renderer: require("./markdown-renderer"),
    highlight: function(code) {
        return require("highlight.js").highlightAuto(code).value;
    },
    sanitize: false
};
