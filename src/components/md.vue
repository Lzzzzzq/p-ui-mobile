<template>
  <div class="mdWrap" v-html="marked(mdData)">

  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

const replaceDelimiters = function (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>')
}
const renderHighlight = function (str, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return ''
  }

  try {
    return replaceDelimiters(hljs.highlight(lang, str, true).value)
  } catch (err) {}
}

const renderer = new marked.Renderer()

marked.setOptions({
  renderer,
  'baseUrl': null,
  'breaks': false,
  'gfm': true,
  'headerIds': true,
  'headerPrefix': '',
  'langPrefix': 'language-',
  'mangle': true,
  'pedantic': false,
  'sanitize': false,
  'sanitizer': null,
  'silent': false,
  'smartLists': false,
  'smartypants': false,
  'tables': true,
  'xhtml': false
})

marked.setOptions({
  highlight: renderHighlight
})

export default {
  name: 'Md',
  props: {
    mdData: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {
      marked
    }
  }
}
</script>

<style lang="less">
@import '../../components/style/common.less';

.mdWrap {
  padding: 20px 60px;
  font-family: @font-family-base;
  font-size: @font-size-base;
  color: @text-color-base;

  code {
    display: block;
    overflow-x: auto;
    padding: 16px;
    background: @bg-color-dark;
    color: @text-color-base-dark;
    font-family: @font-family-code;
    border-radius: @border-radius-base;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid @line-color-light;
    width: 100%;
    margin-bottom: 24px;
    color: @text-color-base;

    th {
      border: 1px solid @line-color-light;
      padding: 8px 16px;
      text-align: left;
      white-space: nowrap;
      color: @text-color-base;
      font-weight: 600;
    }
    td {
      border: 1px solid #e9e9e9;
      padding: 8px 16px;
      text-align: left;
    }
  }
}
</style>
