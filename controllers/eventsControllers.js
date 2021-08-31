//createEvent
const createEvent = (req, res) => {
  Event.insertOne(req.params)
  .exec((err, event) => {
    if (err) {
      return res.status(500).json({code: 500, message: "Could not create event.", error: err})
    } else {
      res.status(200).son({code: 200, message: "Event was created.", createdEvent: event})
    }
  })
}

// const createEvent = async (req, res) => {
//   try {
//     const event = await new Event(req.body)
//     await event.save()
//     return res.status(200).send(event)
//   } catch (error) {
//     console.log(error)
//   }
// }

//deleteEvent
//allows user to delete selected event using event_id
const deleteEvent = (req, res) => {
  const {event_id } = req.params
  Event.findOneandDelete({
    event_id: event_id
  }).exec((err, event) => {
    if (err) {
      return res.status(500).json({code: 500, message: "Event could not be deleted.", error: err})
    } else {
      res.status(200).son({code: 200, message: "Event was deleted.", deletedEvent: event})
    }
  })
}

module.exports = {
  createEvent,
  deleteEvent
}