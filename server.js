const express = require('express')
const parser = require('body-parser')
const config = require('./config')
const app = express()
const models = require('./models')

app.use(parser.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req, res) => {
  const pollList = await models.Poll.findAll()
  res.render('index', { pollList })
})

app.get('/api/poll/list', (req, res) => {
  models.Poll.findAll({
    include: ['pollOptions']
  })
  .then((data) => {
    res.send(data)
  })
})

app.post('/api/poll/create/:userId', (req, res) => {
  const {userId} = req.params
  const { title }  = req.body
  models.Poll.create({
    userId,
    title
  })
})

app.post('/api/poll/option/create', (req, res) => {
  models.PollOption.create(req.body)
  .then((data) => {
    res.send(data)
  })
  .cath((e) => {

  })
})

app.get('/api/user/list', async (req, res) => {
  try {
    const userList = await models.User.findAll()
    res.json(userList)
  } catch (e) {

  }
  
})

app.post('/api/user/create', (req, res) => {
  models.User.create(req.body)
  .then((data) => {
    res.send(data)
  })
})

app.listen(config.port, console.log('now listening on ', config.port))
