require('dotenv').config();

const config ={
  dev:{
    username: process.env.NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    driver: {
      dialect: 'mysql',
      host: process.env.HOST
    }

  },
  test:{},
  prod: {}
}

module.exports = config[process.env.NODE_ENV]