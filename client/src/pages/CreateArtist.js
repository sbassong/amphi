import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useHistory } from 'react-router'
import { Input, Button } from 'react-rainbow-components'

const CreateArtist = ({toggleArtists}) => {
  const history = useHistory()

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
      toggleArtists(true)
      history.push('/artists')
    })
    .catch(function (error) {
      console.log(error)
    })

  }

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => handleArtistSubmit(e)}>
        <div>
          <Input type="text"  label="Name" name="name"  placeholder="Enter artist's name" onChange={(e) => updateName(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Genre"  name="genre" placeholder="Enter artist's genre" onChange={(e) => updateGenre(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Description" name="description" placeholder="Enter a short summary about artist" onChange={(e) => updateDescription(e.target.value)}></Input>
        </div>

        <div>
          <Input type="text" label="Image" name="image" placeholder="Enter artist's image URL" onChange={(e) => updateImage(e.target.value)}></Input>
        </div>
      
        <Button className='create-button' type='submit'>Register Artist</Button>
      </form>
    </div>
  )
}

export default CreateArtist