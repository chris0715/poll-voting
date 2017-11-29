const models = require('./models')
const sequelize = require('./setupSequelize')(require('./config').DB)

function setupDb() {
  sequelize.sync({force: true})
}

setupDb()
