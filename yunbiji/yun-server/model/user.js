const mongoose = require('mongoose')

const user = mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    avatar: String,
    desc: {
        type: String,
        default: ''
    }
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}})

module.exports = mongoose.model('user',user)