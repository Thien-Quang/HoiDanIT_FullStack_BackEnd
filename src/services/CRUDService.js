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

const getAUserbyID = async (userId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [userId]);

        let user = results && results.length > 0 ? results[0] : {};

        return user;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createUser = async (Email, MyName, City) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
            [Email, MyName, City]
        );

        console.log("Insert successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateUser = async (Email, MyName, City, userId) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Users Set email = ? , name = ? ,city = ? where id = ? `,
            [Email, MyName, City, userId]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteAUser = async (userId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Users WHERE id=?`,
            [userId]
        );
        console.log("Delete successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}
module.exports = {
    getAllUsers,
    getAUserbyID,
    createUser,
    updateUser,
    deleteAUser
}