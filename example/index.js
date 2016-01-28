// var html = JSON.parse(require("html!markdown!./README.md"));


var html = require("./README.md");
var container = document.getElementById('container');

container.innerHTML = html;
console.log(html)
