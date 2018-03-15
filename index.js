'use strict';

var slugify = require('transliteration').slugify;
var hexo = hexo || {};
var config = hexo.config || {};
var pluginConfig = config.permalink_pinyin || {};

hexo.extend.filter.register('post_permalink', function (data) {
  if (pluginConfig.enable) {
    // https://github.com/andyhu/transliteration#slugifystr-options
    const options = Object.assign({}, pluginConfig, { ignore: ['/', '.'] })
    return slugify(data, options);
  }
  return data;
});
