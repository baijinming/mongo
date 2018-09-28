var express = require('express');
var router = express.Router();
var article = require('../model/article')

//获取笔记接口
router.get('/', (req, res) => {
    let {pn=1, size=5} = req.query
    pn=parseInt(pn)
    size=parseInt(size)
    article.find().populate({path: 'author', select: {password: 0, email: 0}}).sort({_id: -1}).then(data => {
        let count = data.length
        let newdata = [...data].splice((pn-1)*size,size)
        res.json({
            code: 200,
            count,
            data: newdata
        })
    })
})

router.get('/:id', (req, res) => {
    let {id} = req.params
    article.findOneAndUpdate({_id: id}, {$inc: {looknums: 1}})
        .populate({path: 'author', select: {password: 0, email: 0}})
        .then(data => {
            res.json({
                code: 200,
                data
            })
        })
})

//添加笔记接口
router.post('/add', (req, res) =>{
    if(!req.session.user) {
        res.json({
            code: 401,
            msg: '未登录无法发布笔记'
        })
    }else{
        let {title, content, contentText, tag} = req.body
        let author = req.session.user._id
        article.create({author, title, content, contentText, tag}).then(data => {
            res.json({
                code: 200,
                msg: '添加笔记成功'
            })
        })
    }
})

module.exports = router