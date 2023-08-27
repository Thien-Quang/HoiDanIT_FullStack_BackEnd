const connection = require("../config/database")
const { getAllUsers, getAUserbyID, createUser, updateUser, deleteAUser } = require("../services/CRUDService")

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getCreatepage = (req, res) => {

    res.render('create.ejs')

}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getAUserbyID(userId)
    res.render('edit.ejs', { userEdit: user })
}

const postCreateUser = async (req, res) => {
    const { Email, MyName, City } = req.body;
    const success = await createUser(Email, MyName, City);
    if (success) {
        res.send('Create user success');
    } else {
        res.status(500).send("An error occurred while creating the user.");
    }
}
const postUpdateUser = async (req, res) => {
    const { Email, MyName, City, userId } = req.body;

    const success = await updateUser(Email, MyName, City, userId);
    if (success) {
        res.send('Update user success');
    } else {
        res.status(500).send("An error occurred while Updatting the user.");
    }
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getAUserbyID(userId)
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.userId;
    const success = await deleteAUser(userId);
    if (success) {
        res.send('Delete user success');
    } else {
        res.status(500).send("An error occurred while Updatting the user.");
    }
}
module.exports = {
    getHomepage,
    getCreatepage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}
