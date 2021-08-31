const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const EventSchema = new Schema({
  artist_id: {type: Schema.Types.ObjectId, ref: 'artist_id' },
  event_name: {type: String, required: true},
  genre: {type: String},
  artist: {type: String},
  date: {type: String},
  time: {type: String},
  venue: {type: String},
  location: {type: String},
  ticket_url: {type: String, required: false}
},{timestamps:true})

const Event = mongoose.model('events', EventSchema)
module.exports = {
  Event
}