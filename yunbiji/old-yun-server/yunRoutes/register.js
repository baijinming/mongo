const express = require('express')
const router = express.Router()
const user = require('../database/model/user')
const isEmail = require('validator/lib/isEmail')

router.post('/register', (req, res) => {
    let {username, email, password} = req.body

    user.findOne({email}).then(data => {
        if (data) {
            res.json({
                code: 401,
                msg: '该邮箱已被注册'
            })
        }
        else {
            if (isEmail(email)) {
                user.create({username, email, password}).then(data => {
                    res.json({
                        code: 200,
                        msg: '注册成功'
                    })
                })
            } else {
                res.json({
                    code: 401,
                    msg: '邮箱格式不对'
                })
            }
        }
    })
})

module.exports = router