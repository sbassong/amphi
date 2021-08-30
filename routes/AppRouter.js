const { Router } = require('express')
const eventsRouter = require('../controllers/eventsControllers')
const artistsRouter = require('../controllers/artistsControllers')

const AppRouter = Router()


AppRouter.use('', artistsRouter)
AppRouter.use('', eventsRouter)


module.exports = AppRouter