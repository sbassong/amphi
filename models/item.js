const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ItemSchema = new Schema({
  artist_id: {type: Schema.Types.ObjectId, ref: 'artist_id' },
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