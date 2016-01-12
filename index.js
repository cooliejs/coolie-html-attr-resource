/**
 * 替换 html 内的非标准的资源属性
 * @author ydr.me
 * @create 2016-01-12 21:27
 */


'use strict';

var dato = require('ydr-utils').dato;

var pkg = require('./package.json');

var defaults = {
    attributeName: 'data-original'
};

module.exports = function (configs) {
    configs = dato.extend({}, defaults, configs);

    var cooliePreHTMLAttrResource = function (options) {
        if (options.progress !== 'pre-html') {
            return options;
        }

        options.code = coolie.matchHTML(options.code, function (node) {
            if (!node.attrs || !node.attrs[configs.attributeName]) {
                return node;
            }

            var url = node.attrs[configs.attributeName];
            var ret = coolie.buildResPath(url, options.file);
            node.attrs[configs.attributeName] = ret.url;
            return node;
        });

        return options;
    };

    cooliePreHTMLAttrResource.package = pkg;

    return cooliePreHTMLAttrResource;
};

module.exports.defaults = defaults;
