var express = require('express');
var router = express.Router();
var user = require('../model/user')

//注册接口
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
            if (password && password.length >= 5) {
                let avatarNumber = Math.ceil(Math.random()*9)
                let avatar = `http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`
                user.create({username, email, password, avatar}).then(data => {
                    res.json({
                        code: 200,
                        msg: '注册成功'
                    })
                })
            } else {
                res.json({
                    code: 401,
                    msg: '密码不能少于五位'
                })
            }
        }
    })
})

//登录接口
router.post('/login', (req, res) => {
    let { email, password } = req.body
    user.findOne({email}).then( data => {
        if (!data) {
            res.json({
                code: 401,
                msg: '该用户不存在'
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
                    avatar: data.avatar,
                    desc: data.desc
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

//退出登录接口
router.post('/quitlogin', (req, res) => {
    if(req.session.user) {
        req.session.user = null
        res.json({
            code: 200,
            msg: '退出登录成功'
        })
    }else {
        res.json({
            code: 401,
            msg: '当前处于未登录状态'
        })
    }
})


module.exports = router;