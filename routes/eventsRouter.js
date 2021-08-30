const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')

Router.post('/events/create/', eventsControllers.createEvent() )
Router.delete('/events/delete/:id', eventsControllers.deleteEvent())