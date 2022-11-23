const db = require("../services/db");

 exports.getUsers = async (req, res) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        const result = await db.executeQuery(`SELECT * FROM employees;`)
        res.status(200).send({ "Message": "Success", result })
    } catch (error) {
        res.status(500).send({ "Message": "Something went wrong", error })
    }
}

