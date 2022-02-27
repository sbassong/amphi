import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router'
const CreateArtist = () => {
  const form = useRef()
  const navigate = useNavigate()

  const [name, updateName] = useState('')
  const [genre, updateGenre] = useState('')
  const [description, updateDescription] = useState('')
  const [image, updateImage] = useState('')

  const handleArtistSubmit = async (e) => {
    e.preventDefault()
    
    const newArtistData = {
      name: name,
      genre: genre,
      description: description,
      image: image
    }

    await Axios.post(`${BASE_URL}/artists/new`, newArtistData)
    .then(function (res) {
      navigate('/artists')
    })
    .catch(function (error) {
      console.log(error)
    })

  }

  return (
    <section className="register-artist-form" id='register-artist'>
      <p className='left-h1'>
        Can't find your favorite artist in our database? 
        <br/>
        Register them below
      </p>
      <div className='form-container'>
        <form ref={form} onSubmit={handleArtistSubmit} name="register-form">
          <div >
            <label htmlFor="name">
              Name
            </label>
            <textarea
              onChange={(e) => updateName(e.target.value)}
              className="input"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div >
            <label htmlFor="genre">
              Genre
            </label>
            <textarea
              onChange={(e) => updateGenre(e.target.value)}
              className="input"
              type="text"
              id="genre"
              name="genre"
            />
          </div>
          <div>
            <label htmlFor="description">
              Description
            </label>
            <textarea
              onChange={(e) => updateDescription(e.target.value)}
              id="description"
              name="description"
            />
          </div>
          <div>
            <label htmlFor="image">
              Image URL
            </label>
            <textarea
              className="input"
              onChange={(e) => updateImage(e.target.value)}
              id="image"
              name="image"
            />
          </div>
          <button className='submit-art-but' type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default CreateArtist