const express = require('express')
const app = express();
const mysql = require('mysql2');
const port = 3000

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mysqldb',
    password: 'Qudrat$haik@786',
    port: 3306
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/employees', (req, res) => {
    connection.query('SELECT * FROM employees', (err, result, fields) => {
            res.status(200).send(result);
        });
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})