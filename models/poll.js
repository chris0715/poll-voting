const Sequelize = require('sequelize')
const sequelize = require('../setupSequelize')(require('../config').DB)

 const Poll = sequelize.define('poll', {
  title: {
    type: Sequelize.STRING
  }
}
  
})

module.exports = Poll