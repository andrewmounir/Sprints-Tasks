const mongoose = require('mongoose')
// creting our collection for user
let userSchema = new mongoose.Schema({
    id: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    purchases: [String]
})

const User = mongoose.model('User', userSchema)
module.exports = User