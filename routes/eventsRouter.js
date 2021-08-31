const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')
const router = Router()

router.post('/create/', eventsControllers.createEvent)
router.delete('/delete/:id', eventsControllers.deleteEvent)