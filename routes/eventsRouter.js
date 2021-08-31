const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')
const router = Router()

router.post('/events/create/', eventsControllers.createEvent)
router.delete('/events/delete/:id', eventsControllers.deleteEvent)