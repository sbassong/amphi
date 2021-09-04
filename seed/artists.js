const db = require('../db')
const faker = require('faker')
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
      description: faker.lorem.paragraph(),
      genre: "rock",
      image: faker.internet.avatar()
    },
    {
      name: `My Morning Jacket`,
      description: "My Morning Jacket is an American rock band formed in Louisville, Kentucky in 1998. The band consists of vocalist/guitarist Jim James, bassist Tom Blankenship, drummer Patrick Hallahan, guitarist Carl Broemel, and keyboardist Bo Koster. The band's sound, rooted in rock and country, is often experimental and psychedelic. The group amassed a following beginning in the 2000s in part due to their live performances.",
      genre: "rock",
      image: faker.internet.avatar()
    },
    {
      name: `MF Doom`,
      description: "Daniel Dumile, best known by his stage name MF Doom or simply Doom (both stylized in all caps), was a British-American rapper and record producer. Noted for his intricate wordplay, signature metal mask, and supervillain stage persona, Dumile became a major figure of underground hip hop and alternative hip hop in the 2000s.After his death, Variety described him as one of the scene's most celebrated, unpredictable and enigmatic figures.",
      genre: "hip hop",
      image: faker.internet.avatar()
    },
    {
      name: `Nas`,
      description: "Nasir bin Olu Dara Jones (born September 14, 1973), better known by his stage name Nas, is an American rapper, songwriter, and entrepreneur. Rooted in the New York hip hop scene, he is regarded as one of the greatest and most influential rappers of all time. Nas has released twelve studio albums since 1994, seven of which are certified platinum and multi-platinum in the U.S.",
      genre: "hip hop",
      image: faker.internet.avatar()
    },
    {
      name: `The Popstars`,
      description: "The Popstars recently burst into the pop scene with their pop single: pop. They just won't stop popping pops",
      genre: "pop",
      image: faker.internet.avatar()
    },
    {
      name: `Pop People`,
      description: "The Pop People recently burst into the pop scene with their pop single: pop. Yo pophead, I heard you like pop, so I popped some pop while popping some pops along the poppy",
      genre: "pop",
      image: faker.internet.avatar()
    },
    {
      name: `Boots To The Moon`,
      description: faker.lorem.paragraph(),
      genre: "rock",
      image: faker.internet.avatar()
    },
    {
      name: `My Morning Jacket`,
      description: "My Morning Jacket is an American rock band formed in Louisville, Kentucky in 1998. The band consists of vocalist/guitarist Jim James, bassist Tom Blankenship, drummer Patrick Hallahan, guitarist Carl Broemel, and keyboardist Bo Koster. The band's sound, rooted in rock and country, is often experimental and psychedelic. The group amassed a following beginning in the 2000s in part due to their live performances.",
      genre: "rock",
      image: faker.internet.avatar()
    },
    {
      name: `MF Doom`,
      description: "Daniel Dumile, best known by his stage name MF Doom or simply Doom (both stylized in all caps), was a British-American rapper and record producer. Noted for his intricate wordplay, signature metal mask, and supervillain stage persona, Dumile became a major figure of underground hip hop and alternative hip hop in the 2000s.After his death, Variety described him as one of the scene's most celebrated, unpredictable and enigmatic figures.",
      genre: "hip hop",
      image: faker.internet.avatar()
    },
    {
      name: `Nas`,
      description: "Nasir bin Olu Dara Jones (born September 14, 1973), better known by his stage name Nas, is an American rapper, songwriter, and entrepreneur. Rooted in the New York hip hop scene, he is regarded as one of the greatest and most influential rappers of all time. Nas has released twelve studio albums since 1994, seven of which are certified platinum and multi-platinum in the U.S.",
      genre: "hip hop",
      image: faker.internet.avatar()
    },
    {
      name: `The Popstars`,
      description: faker.lorem.paragraph(),
      genre: "pop",
      image: faker.internet.avatar()
    },
    {
      name: `Pop People`,
      description: faker.lorem.paragraph(),
      genre: "pop",
      image: faker.internet.avatar()
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
