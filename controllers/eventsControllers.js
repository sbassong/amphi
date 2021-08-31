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

//deleteEvent
const deleteEvent = (req, res) => {
  const { _id } = req.params
  Event.findOneAndDelete({
    _id: _id
  }).exec((err, event) => {
    if (err) {
      return res.status(500).json({code: 500, message: "Event could not be deleted.", error: err})
    } else {
      res.status(200).json({code: 200, message: "Event was deleted.", deletedEvent: event})
    }
  })
}

//getEvents
const getEvents = (req, res) => {
  try {
    const events = await Event.find()
    res.send(events)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createEvent,
  deleteEvent,
  getEvents
}