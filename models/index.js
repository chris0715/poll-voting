const Poll = require('./poll')
const User = require('./User')
const PollOption = require('./PollOption')

Poll.belongsTo(User)
Poll.hasMany(PollOption)

module.exports = {
  Poll,
  PollOption,
  User
}