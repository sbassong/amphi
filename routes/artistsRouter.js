const { Router } = require('express')
const artistsControllers = require('../controllers/artistsControllers')

Router.post('/artists/create', artistsControllers.createArtist())
Router.delete('/artists/delete/:id', artistsControllers.deleteArtist())