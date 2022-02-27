const db = require('../db')
const { Artist } = require('../models/artist')
const { Event } = require('../models/event')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createEvents = async () => {
  const events = [
    { 
      event_name: "MMJ Peace and Love Tour",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 3rd, 2021",
      time: "7:00PM",
      venue: "Red Rocks Amphitheater",
      location: "Morrison, CO"
    },
    { 
      event_name: "MMJ Peace and Love Tour 2",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Santa Barbara Bowl",
      location: "Santa Barbara, CA"
    },
    { 
      event_name: "MMJ Peace and Love",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 5th, 2021",
      time: "6:00PM",
      venue: "Santa Barbara Bowl",
      location: "Santa Barbara, CA"
    },
    { 
      event_name: "MMJ Peace and Love",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 18th, 2021",
      time: "8:00PM",
      venue: "Santa Barbara Bowl",
      location: "Santa Barbara, CA"
    },
    { 
      event_name: "The Moon Show",
      genre: 'rock',
      artist: "Boots To The Moon",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Stiffel Theater",
      location: "Seattle, WA"
    },
    { 
      event_name: "The Moon Show 2",
      genre: 'rock',
      artist: "Boots To The Moon",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Spokane Theater",
      location: "Spokane, WA"
    },
    { 
      event_name: "Resurrection Tour Part 1",
      genre: 'hip hop',
      artist: "MF Doom",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Spokane Theater",
      location: "Spokane, WA"
    },
    { 
      event_name: "Resurrection Tour Part 2: Back from the Grave",
      genre: 'hip hop',
      artist: "MF Doom",
      date: "Septempber 9th, 2020",
      time: "8:00PM",
      venue: "Eiffel Theater",
      location: "Port Angeles, WA"
    },
    { 
      event_name: "Illmatic: the legendary show",
      genre: 'hip hop',
      artist: "Nas",
      date: "Septempber 9th, 2020",
      time: "8:00PM",
      venue: "Key Arena",
      location: "Seattle, WA"
    },
    { 
      event_name: "Illmatic: the legend LIVE",
      genre: 'hip hop',
      artist: "Nas",
      date: "October 9th, 2020",
      time: "7:00PM",
      venue: "Key Arena",
      location: "Seattle, WA"
    },
    {
      event_name: "Live from the Appolo",
      genre: 'pop',
      artist: "The Popstars",
      date: "August 31st, 2021",
      time: "8:00PM",
      venue: "The Apollo",
      location: "San Francisco, CA"
    },
    {
      event_name: "Live from the Appolo",
      genre: 'pop',
      artist: "The Popstars",
      date: "August 31st, 2021",
      time: "8:00PM",
      venue: "The Apollo",
      location: "San Francisco, CA"
    },
    {
      event_name: "Live from the Appolo",
      genre: 'pop',
      artist: "Pop People",
      date: "August 31st, 2021",
      time: "8:00PM",
      venue: "The Apollo",
      location: "San Francisco, CA"
    },
    { 
      event_name: "MMJ Peace and Love Tour",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 3rd, 2021",
      time: "7:00PM",
      venue: "Red Rocks Amphitheater",
      location: "Morrison, CO"
    },
    { 
      event_name: "MMJ Peace and Love Tour 2",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Santa Barbara Bowl",
      location: "Santa Barbara, CA"
    },
    { 
      event_name: "MMJ Peace and Love",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 5th, 2021",
      time: "6:00PM",
      venue: "Santa Barbara Bowl",
      location: "Santa Barbara, CA"
    },
    { 
      event_name: "MMJ Peace and Love",
      genre: 'rock',
      artist: "My Morning Jacket",
      date: "Septempber 18th, 2021",
      time: "8:00PM",
      venue: "Santa Barbara Bowl",
      location: "Santa Barbara, CA"
    },
    { 
      event_name: "The Moon Show",
      genre: 'rock',
      artist: "Boots To The Moon",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Stiffel Theater",
      location: "Seattle, WA"
    },
    { 
      event_name: "The Moon Show 2",
      genre: 'rock',
      artist: "Boots To The Moon",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Spokane Theater",
      location: "Spokane, WA"
    },
    { 
      event_name: "Resurrection Tour Part 1",
      genre: 'hip hop',
      artist: "MF Doom",
      date: "Septempber 5th, 2021",
      time: "8:00PM",
      venue: "Spokane Theater",
      location: "Spokane, WA"
    },
    { 
      event_name: "Resurrection Tour Part 2: Back from the Grave",
      genre: 'hip hop',
      artist: "MF Doom",
      date: "Septempber 9th, 2020",
      time: "8:00PM",
      venue: "Eiffel Theater",
      location: "Port Angeles, WA"
    },
    { 
      event_name: "Illmatic: the legendary show",
      genre: 'hip hop',
      artist: "Nas",
      date: "Septempber 9th, 2020",
      time: "8:00PM",
      venue: "Key Arena",
      location: "Seattle, WA"
    },
    { 
      event_name: "Illmatic: the legend LIVE",
      genre: 'hip hop',
      artist: "Nas",
      date: "October 9th, 2020",
      time: "7:00PM",
      venue: "Key Arena",
      location: "Seattle, WA"
    },
    {
      event_name: "Live from the Appolo",
      genre: 'pop',
      artist: "The Popstars",
      date: "August 31st, 2021",
      time: "8:00PM",
      venue: "The Appolo",
      location: "San Francisco, CA"
    },
    {
      event_name: "Live from the Appolo",
      genre: 'pop',
      artist: "The Popstars",
      date: "August 31st, 2021",
      time: "8:00PM",
      venue: "The Appolo",
      location: "San Francisco, CA"
    },
    {
      event_name: "Live from the Appolo",
      genre: 'pop',
      artist: "Pop People",
      date: "August 31st, 2021",
      time: "8:00PM",
      venue: "The Appolo",
      location: "San Francisco, CA"
    }
  ]
  await Event.insertMany(events)
  console.log('Created and added events to amphiDB!')
}

const createArtists = async () => {
  const artists = [
    {
      name: `Boots To The Moon`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "rock",
      image: "https://i.imgur.com/FFtgEbc.jpg"
    },
    {
      name: `My Morning Jacket`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "rock",
      image: "https://i.imgur.com/hJIF9D3.jpg"
    },
    {
      name: `MF Doom`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "hip hop",
      image: "https://i.imgur.com/HqBoF6K.jpg"
    },
    {
      name: `Nas`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "hip hop",
      image: "https://i.imgur.com/uS6OKyk.jpg"
    },
    {
      name: `The Popstars`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "pop",
      image: "https://i.imgur.com/3LDI37j.jpg"
    },
    {
      name: `Pop People`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "pop",
      image: "https://i.imgur.com/hmBKxii.jpg"
    },
    {
      name: `Boots To The Moon`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "rock",
      image: "https://i.imgur.com/FFtgEbc.jpg"
    },
    {
      name: `My Morning Jacket`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "rock",
      image: "https://i.imgur.com/hJIF9D3.jpg"
    },
    {
      name: `MF Doom`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "hip hop",
      image: "https://i.imgur.com/HqBoF6K.jpg"
    },
    {
      name: `Nas`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "hip hop",
      image: "https://i.imgur.com/uS6OKyk.jpg"
    },
    {
      name: `The Popstars`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "pop",
      image: "https://i.imgur.com/3LDI37j.jpg"
    },
    {
      name: `Pop People`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      genre: "pop",
      image: "https://i.imgur.com/hmBKxii.jpg"
    }
  ]
  await Artist.insertMany(artists)
  console.log('Created and added artists to amphiDB!')
  return artists
}


const run = async () => {
  await createEvents()
  await createArtists()
  db.close()
}

run()
