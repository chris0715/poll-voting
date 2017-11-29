const models = require('./models')
const sequelize = require('./setupSequelize')(require('./config').DB)
async function setupDb() {
  try {
    await sequelize.sync({force: true})
    await models.User.create({
      firstName: 'marcos',
      lastName: 'polo'
    })
    .then(_ => process.exit(0))

  } catch(e) {

  }
  
}

setupDb()