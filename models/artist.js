const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const ArtistSchema = new Schema({
  event_id: {type: Schema.Types.ObjectId, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  genre: {type: String, required: true}
},{timestamps:true})

module.exports = mongoose.model('artists', ArtistSchema)