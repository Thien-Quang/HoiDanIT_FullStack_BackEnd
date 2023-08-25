const { getHomepage, getAbc, getThienQuang } = require('../controllers/homeController')
const express = require('express')

const router = express.Router()

router.get('/', getHomepage)

router.get('/thienquang', getThienQuang)

router.get('/abc', getAbc)

module.exports = router