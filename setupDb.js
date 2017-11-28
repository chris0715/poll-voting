const models = require('./models')
function setupDb() {
  Poll.sync()
}

setupDb()