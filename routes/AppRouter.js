const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')
const artistsControllers = require('../controllers/artistsControllers')

const AppRouter = Router()


AppRouter.post('/events', eventsControllers.createEvent)

AppRouter.post('/artists', artistsControllers.createArtist)
// AppRouter.use('', eventsRouter)


module.exports = AppRouter