const express = require('express')
const router = express.Router()
const user = require('../database/model/user')

router.post('/login', (req, res) => {
    let { email, password } = req.body
    user.findOne({email}).then( data => {
        if (!data) {
            res.json({
                code: 401,
                msg: '该用户名不存在'
            })
        }
        else {
            if (data.password != password) {
                res.json({
                    code: 401,
                    msg: '密码错误'
                })
            } else {
                req.session.user = data;
                let userInfo = {
                    username: data.username,
                    email: data.email,
                    avatar: data.avatar
                }
                res.json({
                    code: 200,
                    msg: '登录成功',
                    data: userInfo
                })
            }
        }
    })
})


module.exports = router