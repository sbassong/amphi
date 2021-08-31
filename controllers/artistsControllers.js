const {Artist} = require('../models/artist')

//createArtist
const createArtist = async (req, res) => {
  try {
    const artist = await new Artist(req.body)
    await artist.save()
    return res.status(200).send(artist)
  } catch (error) {
    console.log(error)
  }
}

//deleteArtist
// const deleteArtist = (req, res) => {
//   const { _id } = req.params
//   Artist.findOneandDelete({
//     _id: _id
//   }).exec((err, artist) => {
//     if (err) {
//       return res.status(500).json({code: 500, message: "Artist could not be deleted.", error: err})
//     } else {
//       res.status(200).json({code: 200, message: "Artist was deleted.", deletedArtist: artist})
//     }
//   })
// }
const deleteArtist = (req, res) => {
  Artist.deleteOne({_id: req.params.id}, (err) => {
    if (err) console.log(err)
    console.log('successfully deleted artist!')
  })
}

//getArtists
const getArtists = (req, res) => {
  try {
    const artists = await Artist.find()
    res.send(artists)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createArtist,
  deleteArtist,
  getArtists
}