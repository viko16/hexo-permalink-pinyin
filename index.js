'use strict';

var slugify = require('transliteration').slugify;
var hexo = hexo || {};
var config = hexo.config || {};

hexo.extend.filter.register('post_permalink', function (data) {
  if (config.permalink_pinyin && config.permalink_pinyin.enable) {
    return slugify(data, { ignore: ['/', '.'] });
  }
  return data;
});
