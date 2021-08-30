const { Router } = require('express')
const ExampleRouter = require('./ExampleRouter')

const AppRouter = Router()

AppRouter.use('/examples', ExampleRouter)

module.exports = AppRouter