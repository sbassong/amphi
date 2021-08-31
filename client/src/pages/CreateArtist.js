import React from 'react'

const CreateArtist = ({onChange, onSubmit, value}) => {

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => onSubmit(e)}>
        <div>
          <h4>Name:</h4>
          <input type="text" name="name" value={value} placeholder="Enter artist's name" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Genre:</h4>
          <input type="text" name="genre" value={value} placeholder="Enter artist's genre" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Description:</h4>
          <input type="text" name="description" value={value} placeholder="Enter a short summary about artist" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Image URL:</h4>
          <input type="text" name="image" value={value} placeholder="Enter artist's image URL" onChange={(e) => onChange(e)}></input>
        </div>
        
        <button type='submit'>Register Artist</button>
      </form>
    </div>
  )
}

export default CreateArtist