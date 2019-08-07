const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const base = path.resolve(__dirname, '../src')
const dirlist = [base]
const filelist = []
for(let dir of dirlist) {
  if(dir.endsWith('partial') || dir.endsWith('img')) continue
  if(!dir.endsWith('.ejs')) {
    try {
      let list = fs.readdirSync(dir).map(name => path.resolve(dir, name))
      dirlist.push(...list)
    } catch(e) {}
  } else {
    filelist.push(path.resolve(__dirname, '../src', dir))
  }
}

for (let file of filelist) {
  render(file)
}

async function render(filename) {
  const newname = filename.replace('src', 'dist').replace(/.ejs$/, '.html')
  const res = await ejs.renderFile(filename, 
    {
      peopleBrief: fs.readFileSync(path.resolve(__dirname, '../data/people/brief.json')),
      productBrief: fs.readFileSync(path.resolve(__dirname, '../data/products/brief.json'))
    }, 
    {root: path.resolve(__dirname, '../src/')}
  )
  mkdirp.sync(newname.replace(/(\/|\\)[^\/\\]*$/, ''))
  fs.writeFileSync(newname, res)
}
