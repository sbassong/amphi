import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from './globals'

import Header from './components/Header'
import Homepage from './pages/Homepage'
import EventsList from './pages/EventsList'
import ArtistsList from './pages/ArtistsList'
import Artistpage from './pages/Artistpage'
import CreateArtist from './pages/CreateArtist'
import CreateEvent from './pages/CreateEvent'

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
