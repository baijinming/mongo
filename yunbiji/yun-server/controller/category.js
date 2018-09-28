var express = require('express');
var router = express.Router();
var category = require('../model/category')

//获取所有分类接口
router.get('/', (req, res) => {
    category.find().then(data => {
        res.json({
            code: 200,
            data
        })
    })
})

router.get('/:id', (req, res) => {
    let {id} = req.params
    category.find({_id: id}).then(data => {
        res.json({
            code: 200,
            data
        })
    })
})

//添加分类接口
router.post('/', (req, res) => {
    let {name} = req.body
    category.create({name}).then(data => {
        res.json({
            code: 200,
            msg: '添加分类成功'
        })
    })
})

module.exports = router;