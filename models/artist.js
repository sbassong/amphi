const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ArtistSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  genre: {type: String},
  image: {type: String}
},{timestamps:true})

const Artist = mongoose.model('artists', ArtistSchema)
module.exports = {
  Artist
}
