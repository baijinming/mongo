const express = require('express')
const router = express.Router()
const categories = require('../database/model/categories')

router.get('/categories', (req, res) => {
    categories.find().then( data => {
        res.json({
            code: 200,
            data
        })
    })
})


module.exports = router