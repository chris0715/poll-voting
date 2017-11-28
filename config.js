module.exports = {
  port: process.env.PORT || 9800,
  DB: {
    database: 'pollVoting',

    host: 'localhost',
    username: 'root',
    password:  1234,
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
  }
}