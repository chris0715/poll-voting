const express = require('express')
const app = express()
const config = require('./config')
const parser = require('body-parser')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(config.port)