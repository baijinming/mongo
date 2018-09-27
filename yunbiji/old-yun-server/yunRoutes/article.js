const express = require('express')
const router = express.Router()
const article = require('../database/model/article')

router.post('/article', (req, res) => {
    if(req.session.user) {
        let {title, content, tags, contentText} = req.body
        article.create({
            title,
            content,
            tags,
            contentText,
            author: req.session.user.username,
            authorMsg: req.session.user._id
        }).then( data => {
            res.json({
                code: 200,
                msg: '发布笔记成功'
            })
        })
    }else {
        res.json({
            code: 401,
            msg: '登录后才可以发布笔记'
        })
    }
})


module.exports = router