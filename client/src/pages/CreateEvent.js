import React from 'react'

const CreateEvent = ({onChange, onSubmit, value}) => {

  return (
    <div>
      <form className='artist-form' onSubmit={(e) => onSubmit(e)}>
        <div>
          <h4>Name:</h4>
          <input type="text" name="event_name" placeholder="Enter event's name" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Genre:</h4>
          <input type="text" name="genre" placeholder="Enter event's genre" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Artist:</h4>
          <input type="text" name="artist" placeholder="Enter artist's name" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Date:</h4>
          <input type="text" name="date" placeholder="Enter event's date" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Time:</h4>
          <input type="text" name="time" placeholder="Enter event's start time" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Venue:</h4>
          <input type="text" name="venue" placeholder="Enter venue's name" onChange={(e) => onChange(e)}></input>
        </div>
        <div>
          <h4>Location:</h4>
          <input type="text" name="location" placeholder="Enter venue's location" onChange={(e) => onChange(e)}></input>
        </div>
        
        <button type='submit'>Register Event</button>
      </form>
    </div>
  )
}

export default CreateEvent