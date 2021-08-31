const createArtist = (req, res) => {
  Artist.insertOne(req.params)
  .exec((err, artist) => {
    if (err) {
      return res.status(500).json({code: 500, message: "Could not create Artist.", error: err})
    } else {
      res.status(200).son({code: 200, message: "Artist was created.", createdArtist: artist})
    }
  })
}

// const createArtist = async (req, res) => {
//   try {
//     const artist = await new Artist(req.body)
//     await artist.save()
//     return res.status(200).send(artist)
//   } catch (error) {
//     console.log(error)
//   }
// }


//deleteArtist
//allows user to delete selected artist using evid
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