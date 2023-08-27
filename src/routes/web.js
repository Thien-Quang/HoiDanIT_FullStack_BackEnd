const { getHomepage, postCreateUser, getCreatepage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')
const express = require('express')

const router = express.Router()

router.get('/', getHomepage)

router.get('/create', getCreatepage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)


module.exports = router