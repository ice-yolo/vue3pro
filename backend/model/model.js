const mongoose = require('./db')

let proSchema = mongoose.Schema({
  name: String,
  price: Number,
  img: String
})

let pro =  mongoose.model('pro', proSchema,'pro')

module.exports = {pro}