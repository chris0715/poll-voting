const express = require('express')
const parser = require('body-parser')
const config = require('./config')
const app = express()


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/api/post/create', (req, res) => {
  
})

app.listen(config.port, console.log('now listening on ', config.port))