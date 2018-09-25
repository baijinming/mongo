const express = require('express')
const path = require('path')
const formidable = require('formidable')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './图片上传.html'))
})

app.post('/upload', (req, res) => {
    let form = formidable.IncomingForm()
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, './public')

    form.parse(req, (err, fields, files) => {

    })

    form.on('end', () => {
        res.send('上传成功')
    })
})

app.listen(3000)
