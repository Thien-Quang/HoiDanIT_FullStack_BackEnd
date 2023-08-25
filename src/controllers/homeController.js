const connection = require("../config/database")


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getAbc = (req, res) => {

    res.send('check abc')

}

const getThienQuang = (req, res) => {

    res.render('sample.ejs')

}
const postCreateUser = (req, res) => {

    let { Email, MyName, City } = req.body;

    console.log(req.body);
    console.log(Email, MyName, City);

    connection.query(
        `INSERT INTO Users (email, name, city)
         VALUES (?,?,?)`,
        [Email, MyName, City],
        function (err, results) {
            console.log(results);
            res.send('Create user success')
        }
    );
}
module.exports = {
    getHomepage,
    getAbc,
    getThienQuang,
    postCreateUser
}
