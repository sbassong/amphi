const { Router } = require('express')
const artistsControllers = require('../controllers/artistsControllers')
const router = Router()

router.post('/artists/create', artistsControllers.createArtist)
router.delete('/artists/delete/:id', artistsControllers.deleteArtist)