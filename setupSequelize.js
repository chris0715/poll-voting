const Sequelize = require('sequelize')

let sequelize = null

module.exports = (options) {
  if (!sequelize) {
    sequelize = new Sequelize(options)
  }
  return sequelize
}

