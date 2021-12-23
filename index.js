'use strict'

const app = require('./lib/server.js')
const PORT = 3000;
const {db} = require('./lib/model/index.js')

app.start(PORT)