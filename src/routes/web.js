const { getHomepage, getAbc, getThienQuang, postCreateUser } = require('../controllers/homeController')
const express = require('express')

const router = express.Router()

router.get('/', getHomepage)

router.get('/thienquang', getThienQuang)

router.get('/abc', getAbc)

router.post('/create-user', postCreateUser)


module.exports = router