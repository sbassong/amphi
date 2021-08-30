//createEvent
const createEvent = (req, res) => {
  res.
}

//deleteEvent
//allows user to delete selected event using event_id
const deleteEvent = (req, res) => {
  const {id } = req.params
  Event.findOneandDelete({
    event_id: id
  }).exec((err, event) => {
    if (err) {
      return res.status(500).json({code: 500, message: "Event could not be deleted.", error: err})
    } else {
      res.status(200).son({code: 200, message: "Event was deleted", deletedEvent: event})
    }
  })
}