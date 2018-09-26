const express = require('express')
const router = express.Router()

const login = require('./login')
const register = require('./register')
const categories = require('./categories')

router.get('/', (req, res) => {

})

router.use(login)
router.use(register)
router.use(categories)

module.exports = router