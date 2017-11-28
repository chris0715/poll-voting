const Poll = require('./poll')
const User = require('./User')

Poll.belongsTo(User)

module.exports = {
  Poll,
  User
}