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
@import '../../assets/common.less';

.mdWrap {
  padding: 20px 40px 20px 40px;
  font-family: @font-family-base;
  font-size: @font-size-base;
  color: @text-color-base;
  flex: 1;
  box-sizing: border-box;

  pre {
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  code {
    display: block;
    overflow-x: auto;
    padding: 16px;
    background: @bg-color-dark;
    color: @text-color-white;
    // font-family: @font-family-base;
    font-family: @font-family-code;
    border-radius: @border-radius-base;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid @line-color-base;
    width: 100%;
    margin-bottom: 24px;
    color: @text-color-base;

    th {
      border: 1px solid @line-color-base;
      padding: 8px 16px;
      text-align: left;
      white-space: nowrap;
      color: @text-color-base;
      font-weight: 600;
      background-color: @bg-color-sec;
    }
    td {
      border: 1px solid #e9e9e9;
      padding: 8px 16px;
      text-align: left;
    }
  }

  h1 {
    line-height: 40px;
    margin-bottom: 24px;
    margin-top: 8px;
    font-size: 28px;
  }
  h2 {
    margin: 1.6em 0 .6em;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.8;
  }
}
</style>
