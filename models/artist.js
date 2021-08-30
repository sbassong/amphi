const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const ArtistSchema = new Schema({
  event_id: {type: Schema.Types.ObjectId, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  genre: {type: String, required: true},
  image: {type: String, required: true},
  events: [{type: Schema.Types.ObjectId, ref: 'events'}]
},{timestamps:true})

const Artist = mongoose.model('artists', ArtistSchema)
module.exports = {
  Artist
}
