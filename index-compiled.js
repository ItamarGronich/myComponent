var _ = require('underscore');
var fs = require('fs');

function html(string) {
    var preRender = _.template('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body><%= content %></body></html>');
    return fs.writeFile('./index.html', preRender({ content: string }));
}

function h1(string) {
    var preRender = _.template('<h1><%= content%></h1>');

    return preRender({ content: string });
}

function p(string) {
    var preRender = _.template('<p><%= content %></p>');
    return preRender({ content: string });
}

function ul(array) {
    var preRender = _.template('<ul><%for (var i = 0; i < array.length; i ++){%><li><%= array[i] %></li><%}%></ul>');

    return preRender({ array: array });
}

module.exports = {
    html: html,
    h1: h1,
    p: p,
    ul: ul
};

//# sourceMappingURL=index-compiled.js.map