const mongoose = require('mongoose')

const categories = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
}, {versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}})

module.exports = mongoose.model('categories', categories)