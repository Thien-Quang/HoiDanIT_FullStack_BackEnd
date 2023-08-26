const connection = require('../config/database')

const getAllUsers = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Users`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}
module.exports = {
    getAllUsers
}