const http = require('http')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const url = require('url')

ejs.rmWhitespace = true

const dataFile = pathname => JSON.parse(fs.readFileSync(path.resolve(__dirname, `../data/${pathname}.json`)))
const productAll = () => eval(fs.readFileSync('./data/products/all.js').toString())
const data = () => ({
  peopleBrief: dataFile('people/brief'),
  productBrief: dataFile('products/brief'),
  productIndex: dataFile('products/index'),
  productAll: productAll(),
})
const ejsOptions = { root: path.resolve(__dirname, '../src/') }

const server = http.createServer(async (req, resp) => {
  let pathname = url.parse(req.url).pathname
  if (pathname === '/') pathname = '/index'
  try {
    let file = fs.readFileSync(path.resolve(__dirname, '../static/', pathname.substr(1)))
    resp.writeHead(200)
    resp.end(file)
    return
  // eslint-disable-next-line no-empty
  } catch (e) {}
  let html
  try {
    const isProductPage = pathname.match(/^\/products\/([^/]*)\/([^/]*)$/i)
    if (isProductPage) {
      const group = isProductPage[1]
      const id = isProductPage[2]
      const products = productAll()
      if (products[group] && products[group][id]) {
        return html = await ejs.renderFile(
          path.resolve(__dirname, '../src/partial/product.ejs'),
          {
            ...data(),
            group,
            id,
          },
          ejsOptions,
        )
      }
    }
    html = await ejs.renderFile(
      path.resolve(__dirname, `../src/${pathname}.ejs`),
      data(),
      ejsOptions,
    )
  } catch (e) {
    html = '<textarea>Error: ' + e.stack + '</textarea>'
  } finally {
    resp.writeHead(200, { 'Content-Type': 'text/html,charset=utf8' })
    resp.end(html)
  }
})

server.listen(8080)
