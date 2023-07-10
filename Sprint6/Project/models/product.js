const mongoose = require('mongoose')
// creating our collection for products it will have id , name , and price
let productSchema = new mongoose.Schema({
    id: String,
    name: {type: String, required: true},
    price: {type: Number, default: 0}
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product