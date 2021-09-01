import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useHistory } from 'react-router'

const CreateArtist = () => {
  const history = useHistory()
  const [artists, setArtists] = useState([])

  const [name, updateName] = useState('')
  const [genre, updateGenre] = useState('')
  const [description, updateDescription] = useState('')
  const [image, updateImage] = useState('')

  //handleSubmit for artist
  const handleArtistSubmit = (e) => {
    e.preventDefault()
    
    const newArtistData = {
      name: name,
      genre: genre,
      description: description,
      image: image
    }

    axios.post(`${BASE_URL}/artists/new`, newArtistData)
    .then(function (res) {
      const newArtist = res.data.results
      setArtists([newArtist, ...artists])
      history.push('/')
    })
    .catch(function (error) {
      console.log(error)
    })

  }

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => handleArtistSubmit(e)}>
        <div>
          <h4>Name:</h4>
          <input type="text"  name="name"  placeholder="Enter artist's name" onChange={(e) => updateName(e.target.value)}></input>
        </div>

        <div>
          <h4>Genre:</h4>
          <input type="text"  name="genre" placeholder="Enter artist's genre" onChange={(e) => updateGenre(e.target.value)}></input>
        </div>

        <div>
          <h4>Description:</h4>
          <input type="text" name="description" placeholder="Enter a short summary about artist" onChange={(e) => updateDescription(e.target.value)}></input>
        </div>

        <div>
          <h4>Image URL:</h4>
          <input type="text" name="image" placeholder="Enter artist's image URL" onChange={(e) => updateImage(e.target.value)}></input>
        </div>
      
        <button type='submit'>Register Artist</button>
      </form>
    </div>
  )
}

export default CreateArtist