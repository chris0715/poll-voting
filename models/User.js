const Sequelize = require('sequelize')
const sequelize = require('../setupSequelize')(require('../config').DB)

 const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

module.exports = User