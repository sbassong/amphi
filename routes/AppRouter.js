const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')
const artistsControllers = require('../controllers/artistsControllers')

const AppRouter = Router()


AppRouter.post('/events', eventsControllers.createEvent)
AppRouter.delete('/events', eventsControllers.deleteEvent)
AppRouter.get('/events', eventsControllers.getEvents)

AppRouter.post('/artists', artistsControllers.createArtist)
AppRouter.delete('/artists', artistsControllers.deleteArtist)
AppRouter.get('/artists', artistsControllers.getArtists)

module.exports = AppRouter