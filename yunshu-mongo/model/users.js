var mongoose = require('mongoose')

const yunSchema = new mongoose.Schema({
    id: Number,
    name: String,
    sex: String,
    friends: Array
},{versionKey: false})

const users = mongoose.model('users', yunSchema)

module.exports =  users