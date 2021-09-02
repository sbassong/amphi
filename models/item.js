const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ItemSchema = new Schema({
  event_name: {type: String, required: true},
  genre: {type: String},
  artist: {type: String},
  date: {type: String},
  time: {type: String},
  venue: {type: String},
  location: {type: String},
},{timestamps:true})

const Item = mongoose.model('items', ItemSchema)
module.exports = {
  Item
}