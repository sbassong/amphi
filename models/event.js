const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const EventSchema = new Schema({
  event_id: {type: Schema.Types.ObjectId, required: true},
  event_name: {type: String, required: true},
  genre: {type: String, required: true},
  artist: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  venue: {type: String, required: true},
  ticket_url: {type: String, required: false}
},{timestamps:true})

module.exports = mongoose.model('events', EventSchema)