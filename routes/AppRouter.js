const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')
const artistsControllers = require('../controllers/artistsControllers')

const AppRouter = Router()

AppRouter.use('/events', eventsControllers)
AppRouter.use('/artists', artistsControllers)


module.exports = AppRouter