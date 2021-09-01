const {Event} = require('../models/event')

//createEvent
const createEvent = async (req, res) => {
  try {
    const event = await new Event(req.body)
    await event.save()
    return res.status(200).send(event)
  } catch (error) {
    console.log(error)
  }
}

const deleteEvent = (req, res) => {
  Event.deleteOne({_id: req.params.id}, (err) => {
    if (err) console.log(err)
    console.log('successfully deleted event!')
  })
}

//getEvents
const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
    res.send(events)
  } catch (error) {
    console.log(error)
  }
}

//getEventsByArtistName
const getEventsByArtistName = async (req, res) => {
  try {
    const events = await Event.find({artist: req.params.artist})
    res.send(events)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
  getEventsByArtistName
}