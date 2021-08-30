const db = require('../db')
const faker = require('faker')
const { Artist, Event } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createEvents = async () => {
  const events = [
    { 
      event_name: "Sam's psychedelic adventure",
      genre: 'rock',
      artist: "Sam Bassong",
      date: "Septempber 3rd, 2021",
      time: "7:00PM",
      venue: "Red Rocks Amphitheater",
      location: "Morrison, CO"
    },
    { 
      event_name: "Sam's psychedelic adventure 2",
      genre: 'rock',
      artist: "Sam Bassong",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Santa Barbara Bowl",
      location: "Santa Barbara, CA"
    },
    {
      event_name: "Live Loud",
      genre: 'pop',
      artist: "The Popstars",
      date: "August 31st, 2021",
      time: "8:00PM",
      venue: "The Masonic",
      location: "San Francisco, CA"
    }
  ]
  await Event.insertMany(events)
  console.log('Created and added events to amphiDB!')
}

const createArtists = async (events) => {
  const artists = [
    {
      name: `Sam Bassong`,
      description: "Sam Bassong is an aspiring rocker just launching his career in the West. His style doesn't ExtensionScriptApis, yet is very varied.",
      genre: "rock",
      image: faker.internet.avatar(),
      events: events.map((event) => event.event_id)
    },
    {
      name: `The Popstarts`,
      description: "The Popstars recently burst into the pop scene with their pop single: pop.",
      genre: "pop",
      image: faker.internet.avatar(),
      events: events.map((event) => event.event_id)
    }
  ]
  await Artist.insertMany(artists)
  console.log('Created and added artists to amphiDB!')
  return artists
}


const run = async () => {
  const events = await createEvents()
  await createArtistsWithEvents(events)
  db.close()
}

run()
