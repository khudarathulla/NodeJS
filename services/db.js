const mysql = require("mysql2/promise")
const config = require("../db.config")
async function executeQuery(query,parameters){
    const connection = await mysql.createConnection(config.sqlConfig);
    const [output] = await connection.execute(query,parameters)
    return output
}
module.exports = {executeQuery}