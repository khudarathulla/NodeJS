const dotenv = require("dotenv")
dotenv.config()
const { host,user,password,database } = process.env
const config = {
    sqlConfig:{
    host: host,
    user: user,
    password: password,
    database: database
}}
  
module.exports = config
