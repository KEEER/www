const {removeSync} = require('fs-extra')
const path = require('path')

removeSync(path.resolve(__dirname, '../dist'))
