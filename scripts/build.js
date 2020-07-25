const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const { mkdirpSync, copySync } = require('fs-extra')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const base = path.resolve(__dirname, '../src')
const dirlist = [ base ]
const data = {
  peopleBrief: require('../data/people/brief.json'),
  productBrief: require('../data/products/brief.json'),
  productIndex: require('../data/products/index.json'),
  productAll: eval(fs.readFileSync('./data/products/all.js').toString()),
}
const filelist = []
for (let dir of dirlist) {
  if (dir.endsWith('partial') || dir.endsWith('img')) continue
  if (!dir.endsWith('.ejs')) {
    try {
      let list = fs.readdirSync(dir).map(name => path.resolve(dir, name))
      dirlist.push(...list)
    // eslint-disable-next-line no-empty
    } catch (e) {}
  } else {
    filelist.push(path.resolve(__dirname, '../src', dir))
  }
}

for (let file of filelist) {
  render(file)
}

for (let group in data.productAll) {
  for (let id in data.productAll[group]) {
    if (data.productAll[group][id].norender) continue
    render(
      path.resolve(__dirname, '../src/partial/product.ejs'),
      { group, id },
      path.resolve(__dirname, `../src/products/${group}/${id}.ejs`),
    )
  }
}

async function render (filename, extraOptions = {}, toFileId = filename) {
  const newname = toFileId.replace('src', 'dist').replace(/.ejs$/, '.html')
  const res = await ejs.renderFile(filename,
    { ...data, ...extraOptions },
    { root: path.resolve(__dirname, '../src/'), rmWhitespace: true },
  )
  mkdirpSync(newname.replace(/(\/|\\)[^/\\]*$/, ''))
  fs.writeFileSync(newname, res)
}

mkdirpSync(path.resolve(__dirname, '../dist'))
copySync(path.resolve(__dirname, '../static'), path.resolve(__dirname, '../dist/'))

const cssPath = path.resolve(__dirname, '../static/css/styles.css')
postcss([ autoprefixer(), cssnano({ preset: 'default' }) ])
  .process(fs.readFileSync(cssPath), { from: cssPath })
  .then(res => fs.writeFileSync(path.resolve(__dirname, '../dist/css/styles.css'), res.css))
