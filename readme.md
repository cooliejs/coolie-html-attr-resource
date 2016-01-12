# coolie-html-attr-resource

**coolie-cli middleware coolie 命令行中间件**


[![Build Status][travis-img]][travis-url] 
[![coolie-html-attr-resource][shields-img]][shields-url]

[travis-img]: https://travis-ci.org/cloudcome/coolie-html-attr-resource.svg?branch=master
[travis-url]: https://travis-ci.org/cloudcome/coolie-html-attr-resource
[shields-img]: https://img.shields.io/npm/v/coolie-html-attr-resource.svg
[shields-url]: https://www.npmjs.com/package/coolie-html-attr-resource


替换 HTML 中非标准的资源属性。


# configs
## attributeName
指定非标准属性，默认为`data-original`。


## tagName
指定标签名，默认为`img`。


## progress
替换进度，默认为`pre-html`。


# useage

```
// 在 coolie.config.js 中添加
coolie.use(require('coolie-html-attr-resource')({
    attributeName: 'data-original',
    tagName: 'img',
    progress: 'pre-html'
}));
```
