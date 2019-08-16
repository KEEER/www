const http = require('http')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const url = require('url')

ejs.rmWhitespace = true

const server = http.createServer(async (req, resp) => {
  let pathname = url.parse(req.url).pathname
  if(pathname === '/') pathname = '/index'
  try {
    let file = fs.readFileSync(path.resolve(__dirname, '../static/', pathname.substr(1)))
    resp.writeHead(200)
    resp.end(file)
    return
  // eslint-disable-next-line no-empty
  } catch(e) {}
  let html
  try {
    html = await ejs.renderFile(
      path.resolve(__dirname, `../src/${pathname}.ejs`),
      {
        peopleBrief: fs.readFileSync(path.resolve(__dirname, '../data/people/brief.json')),
        productBrief: fs.readFileSync(path.resolve(__dirname, '../data/products/brief.json')),
      },
      {root: path.resolve(__dirname, '../src/')}
    )
  } catch(e) {
    html = '<textarea>Error: ' + e.stack + '</textarea>'
  } finally {
    resp.writeHead(200, {'Content-Type': 'text/html,charset=utf8'})
    resp.end(html)
  }
})

server.listen(8080)
