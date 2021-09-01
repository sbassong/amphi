import React, { Fragment } from 'react'

const CreateArtist = ({onChange, onSubmit, values}) => {

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => onSubmit(e)}>
        {values.map((value, index) => (
        <Fragment key={`${value}~${index}`}>
          <div>
            <h4>Name:</h4>
            <input type="text" value={value.name} name="name"  placeholder="Enter artist's name" onChange={(e) => onChange(index, e)}></input>
          </div>

          <div>
            <h4>Genre:</h4>
            <input type="text" value={value.genre} name="genre" placeholder="Enter artist's genre" onChange={(e) => onChange(index, e)}></input>
          </div>

          <div>
            <h4>Description:</h4>
            <input type="text" value={value.description} name="description" placeholder="Enter a short summary about artist" onChange={(e) => onChange(index, e)}></input>
          </div>

          <div>
            <h4>Image URL:</h4>
            <input type="text" value={value.image} name="image" placeholder="Enter artist's image URL" onChange={(e) => onChange(index, e)}></input>
          </div>
        </Fragment>
          ))}
      
        <button type='submit'>Register Artist</button>

      </form>
    </div>
  )
}

export default CreateArtist