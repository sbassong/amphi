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

//deleteArtist by id
const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.deleteOne({_id: req.params.id})
  } catch (error) {
    console.log(error)
  }
}

//getArtists
const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    res.send(artists)
  } catch (error) {
    console.log(error)
  }
}

//getArtistById
const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findOne({_id: req.params.id})
    res.send(artist)
  } catch (error) {
    console.log(error)
  }
}

//getArtistsByName
const getArtistsByName = async (req, res) => {
  try {
    const artists = await Artist.find({name: req.params.name})
    res.send(artists)
  } catch (error) {
    console.log(error)
  }
}
//getArtistByName. only one
const getArtistByName = async (req, res) => {
  try {
    const artist = await Artist.findOne({name: req.params.name})
    res.send(artist)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  createArtist,
  deleteArtist,
  getArtists,
  getArtistById,
  getArtistsByName,
  getArtistByName
}