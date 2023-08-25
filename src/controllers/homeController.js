const getHomepage = (req, res) => {

    res.send("Chào mừng tôi rất vui")

}
const getAbc = (req, res) => {

    res.send('check abc')

}

const getThienQuang = (req, res) => {

    res.render('sample.ejs')

}
module.exports = {
    getHomepage,
    getAbc,
    getThienQuang
}
