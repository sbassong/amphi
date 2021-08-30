const createArtist = (req, res) => {
  Artist.insertOne(req.params)
  if (err) {
    return res.status(500).json({code: 500, message: "Could not create Artist.", error: err})
  } else {
    res.status(200).son({code: 200, message: "Artist was created.", createdEvent: artist})
  }
}

//deleteEvent
//allows user to delete selected event using event_id
const deleteArtist = (req, res) => {
  const {id } = req.params
  Artist.findOneandDelete({
    event_id: id
  }).exec((err, artist) => {
    if (err) {
      return res.status(500).json({code: 500, message: "Artist could not be deleted.", error: err})
    } else {
      res.status(200).son({code: 200, message: "Artist was deleted.", deletedArtist: artist})
    }
  })
}

module.exports = {
  createArtist,
  deleteArtist
}