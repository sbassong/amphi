import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Route, Routes} from 'react-router-dom'
import './styles/App.css';

import Axios from 'axios'
import { BASE_URL } from './globals'

import Header from './components/Header'
import Homepage from './pages/Homepage.js'
import ArtistsList from './pages/ArtistsList'
import ArtistPage from './pages/ArtistPage'
import CreateArtist from './pages/CreateArtist'
import SearchResults from './pages/SearchResults'
import Favorites from './pages/Favorites';


const App = () => {
  const [artists, setArtists] = useState([])
  const [filterQuery, setFilterQuery] = useState('')
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })
  
  const detectSize = useCallback (() => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }, [])


  const getArtists = useCallback(async() => {
    try {
      const res = await Axios.get(`${BASE_URL}/artists`)
      setArtists(res.data)
    } catch (error) {
      throw(error)
    }
  }, [])


  useEffect(() => {
    getArtists()    
  }, [getArtists])

  useEffect(() => {
      window.addEventListener('resize', detectSize)
      return () => {
        window.removeEventListener('resize', detectSize)
      }
  }, [detectSize, windowDimension])
  

  return (
      <div className="App">
        <Header setFilterQuery={setFilterQuery} winWidth={windowDimension.winWidth}/> 
        <main>
          <Routes>
            <Route exact path='/' element={<Homepage artists={artists} />} />
            <Route exact path='/artists' element={<ArtistsList artists={artists} />} />
            <Route exact path='/favorites' element={<Favorites Axios={Axios} BASE_URL={BASE_URL} winWidth={windowDimension.winWidth}/>} />
            <Route exact path='/artists/new' element={<CreateArtist />} />
            <Route exact path='/artists/search_results' element={<SearchResults artists={artists} filterQuery={filterQuery} />} />
            {
              artists.map(artist => (
                <Route path={`/artists/${artist._id}`} element={<ArtistPage artist={artist} winWidth={windowDimension.winWidth}/>} />
              )
              )}
          </Routes>
        </main>
      </div>
  )
}

export default App;
