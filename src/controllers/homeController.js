const connection = require("../config/database")


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getAbc = (req, res) => {

    res.send('check abc')

}

const getCreatepage = (req, res) => {

    res.render('create.ejs')

}
const postCreateUser = async (req, res) => {

    let { Email, MyName, City } = req.body;

    console.log(req.body);
    console.log(Email, MyName, City);

    try {
        let [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
            [Email, MyName, City]
        );

        console.log("Insert successful:", results);
        res.send('Create user success');
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("An error occurred while creating the user.");
    }
}
module.exports = {
    getHomepage,
    getAbc,
    getCreatepage,
    postCreateUser
}
