const models = require('./models')

export async function CreatePoll(userId, title) {
  const createdPoll = await models.Poll.create({
    title,
    userId
  })
}