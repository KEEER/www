const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const { mkdirpSync, copySync } = require('fs-extra')

const base = path.resolve(__dirname, '../src')
const dirlist = [ base ]
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

async function render (filename) {
  const newname = filename.replace('src', 'dist').replace(/.ejs$/, '.html')
  const res = await ejs.renderFile(filename,
    {
      peopleBrief: fs.readFileSync(path.resolve(__dirname, '../data/people/brief.json')),
      productBrief: fs.readFileSync(path.resolve(__dirname, '../data/products/brief.json')),
      productIndex: require('../data/products/index.json'),
    },
    { root: path.resolve(__dirname, '../src/') },
  )
  mkdirpSync(newname.replace(/(\/|\\)[^/\\]*$/, ''))
  fs.writeFileSync(newname, res)
}

mkdirpSync(path.resolve(__dirname, '../dist'))
copySync(path.resolve(__dirname, '../static'), path.resolve(__dirname, '../dist/'))
