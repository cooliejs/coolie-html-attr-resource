# coolie-cli middleware: coolie-html-attr-resource

替换 HTML 中非标准的资源属性


# configs
## attributeName
指定非标准属性，默认为`data-original`。


## tagName
指定标签名，默认为`img`。


# useage

```
// 在 coolie.config.js 中添加
coolie.use(require('coolie-html-attr-resource')({
    attributeName: 'data-original',
    tagName: 'img'
}));
```
