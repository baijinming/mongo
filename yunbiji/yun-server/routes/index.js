var express = require('express');
var router = express.Router();

const user = require('../controller/user')
const article = require('../controller/article')
const category = require('../controller/category')

router.use('/user',user)
router.use('/article',article)
router.use('/category',category)

module.exports = router;
