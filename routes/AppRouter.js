const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')
const artistsControllers = require('../controllers/artistsControllers')

const AppRouter = Router()

AppRouter.use('/events/create/', eventsControllers.createEvent())
AppRouter.use('/events/delete/:id', eventsControllers.deleteEvent())
AppRouter.use('/artists/create', artistsControllers.createArtist())
AppRouter.use('/artists/delete/:id', artistsControllers.deleteArtist())


module.exports = AppRouter