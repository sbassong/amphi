import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router'

const CreateArtist = () => {
  const navigate = useNavigate()

  const [name, updateName] = useState('')
  const [genre, updateGenre] = useState('')
  const [description, updateDescription] = useState('')
  const [image, updateImage] = useState('')

  //handleSubmit for artist
  const handleArtistSubmit = async (e) => {
    e.preventDefault()
    
    const newArtistData = {
      name: name,
      genre: genre,
      description: description,
      image: image
    }

    await axios.post(`${BASE_URL}/artists/new`, newArtistData)
    .then(function (res) {
      navigate('/artists')
    })
    .catch(function (error) {
      console.log(error)
    })

  }

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => handleArtistSubmit(e)}>
        <div>
          <input type="text"  label="Name" name="name"  placeholder="Enter artist's name" onChange={(e) => updateName(e.target.value)}></input>
        </div>

        <div>
          <input type="text" label="Genre"  name="genre" placeholder="Enter artist's genre" onChange={(e) => updateGenre(e.target.value)}></input>
        </div>

        <div>
          <input type="text" label="Description" name="description" placeholder="Enter a short summary about artist" onChange={(e) => updateDescription(e.target.value)}></input>
        </div>

        <div>
          <input type="text" label="Image" name="image" placeholder="Enter artist's image URL" onChange={(e) => updateImage(e.target.value)}></input>
        </div>
      
        <button className='create-button' type='submit'>Register Artist</button>
      </form>
    </div>
  )
}

export default CreateArtist