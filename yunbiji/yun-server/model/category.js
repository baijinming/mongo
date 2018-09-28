const mongoose = require('mongoose')

const categroy = mongoose.Schema({
    name: String
},{versionKey: false})

module.exports = mongoose.model('categroy', categroy)