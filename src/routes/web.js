const { getHomepage, getAbc, postCreateUser, getCreatepage } = require('../controllers/homeController')
const express = require('express')

const router = express.Router()

router.get('/', getHomepage)

router.get('/create', getCreatepage)

router.get('/abc', getAbc)

router.post('/create-user', postCreateUser)


module.exports = router