const express = require("express");
const cors = require("cors");

const app = express();
const sql = require('mysql2/promise');
const { createConnection } = require("mysql2");
const PORT = process.env.PORT || 8080;
const sqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Qudrat$haik@786',
    database: 'mysqldb',
}

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// simple route
app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

app.get("/get-users", async (req, res) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        const connection = await sql.createConnection(sqlConfig);
        const result = await connection.execute(`SELECT * FROM employees;`)
        const records=result[0];
        res.status(200).send({ "Message": "Success", records })
    } catch (err) {
        res.status(500).send({ "Message": "Something went wrong" })
    }
})

app.put("/put-users", async (req,res) =>{
    try {
        const {sname, smarks, section, email, sroll} = req.body
        const connection = await sql.createConnection(sqlConfig);
        const result = await connection.execute(`UPDATE mydetails SET sname=?, smarks=?, section=?, email=? where sroll=?;`,[sname, smarks, section, email, sroll])
        const records = result[0];
        res.status(200).send({ "Message": "Success" , records })
        
    } catch (error) {
        res.status(500).send({ "Message": "Something went wrong"})
    }
})


app.post("/post-users", async (req,res) =>{
    try {
        const {sroll, sname, smarks, section, email} = req.body
        const connection = await sql.createConnection(sqlConfig);
        const result = await connection.execute(`INSERT INTO MYDETAILS VALUES(?,?,?,?,?)`,[sroll, sname, smarks, section, email]);
        const records = result[0];
        res.status(200).send({"Message":"Success", records})    
    } catch (error) {
        res.status(500).send({"Message": "Something went wrong"})
    }
})

app.delete("/delete-users", async (req,res) =>{ 
    try {
        const {sroll} = req.body;
        const connection = await sql.createConnection(sqlConfig);
        const result = await connection.execute(`DELETE FROM MYDETAILS WHERE sroll=?`, [sroll]);
        const records = result[0];
        res.status(200).send ({"Message":"Success", records})
    }catch (error) {
        res.status(500).send({"MEssage": "Something went Wrong"})
    }

})

// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log("Server is running on port, ${PORT}");
});


