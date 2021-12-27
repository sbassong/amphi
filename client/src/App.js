import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css';

import Axios from 'axios'
import { BASE_URL } from './globals'

import Header from './components/Header'
import Homepage from './pages/Homepage.js'
import EventsList from './pages/EventsList'
import ArtistsList from './pages/ArtistsList'
import ArtistPage from './pages/ArtistPage'
import CreateArtist from './pages/CreateArtist'
import CreateEvent from './pages/CreateEvent'
import SearchResults from './pages/SearchResults'
import Cart from './pages/Cart';



const App = () => {
  const [artists, setArtists] = useState([])
  const [filterQuery, setFilterQuery] = useState('')
  
  //getArtists
  const getArtists = async() => {
    try {
      const res = await Axios.get(`${BASE_URL}/artists`)
      setArtists(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getArtists()    
  }, [])

  return (
      <div className="App">
        <Header setFilterQuery={setFilterQuery} />
        <main>
          <Routes>
            <Route exact path='/' element={<Homepage artists={artists} />} />
            <Route exact path='/events' element={<EventsList Axios={Axios} BASE_URL={BASE_URL} />} />
            <Route exact path='/artists' element={<ArtistsList artists={artists} />} />
            <Route exact path='/cart' element={<Cart Axios={Axios} BASE_URL={BASE_URL}/>} />
            <Route exact path='/events/new' element={<CreateEvent />} />
            <Route exact path='/artists/new' element={<CreateArtist />} />
            <Route exact path='/artists/search_results' element={<SearchResults artists={artists} filterQuery={filterQuery} />} />
            {
              artists.map(artist => (
                <Route path={`/artists/${artist._id}`} element={<ArtistPage artist={artist} />} />
              )
              )}
          </Routes>
        </main>
      </div>
  )
}

export default App;
