const express = require('express')
const path = require('path')
const qiniu = require('qiniu')

const app = express()

var accessKey = 'hiaSMM1QqBT-0Q0KywiDrpp_tXbgBz8p1mFXkoil';
var secretKey = 'A4to1dxJHlKuQ_HuoKWhdf34-J3B_dYzt4eIT5tl';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

var options = {
    scope: "demo",
    returnBody:  '{"key": $(key), "hash": $(etag), "url": "http://pflqd1edg.bkt.clouddn.com/$(key)"}',
    expires: 3600,
    deadline: Math.round(new Date().getTime()/1000)+3600,
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './七牛上传图片.html'))
})

app.post('/getToken', (req, res) => {
    res.json({
        code: 200,
        token: uploadToken
    })
})

app.listen(3000)
