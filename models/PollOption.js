const Sequelize = require('sequelize')
const sequelize = require('../setupSequelize')(require('../config').DB)

 const PollOption = sequelize.define('pollOption', {
  name: {
    type: Sequelize.STRING
  },
  voted: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = PollOption