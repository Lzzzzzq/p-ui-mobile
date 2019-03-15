const fs = require('fs')
const path = require('path')
const componentDir = 'components'
const cModuleNames = fs.readdirSync(path.resolve(componentDir))

const delList = ['index.js', 'style.js', 'style']

const cModuleMap = cModuleNames.reduce((prev, name) => {
  if (delList.indexOf(name) >= 0 || !name[0].match(/[a-z]/)) return prev
  prev[name] = `${componentDir}/${name}/index.js`
  return prev
}, {})

module.exports = cModuleMap
