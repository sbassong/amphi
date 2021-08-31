import Listing from '../components/Listing'

const EventsList = ({events}) => {

  return (
    <div>
      {events.map(event => (
        <Listing key={event._id} name={event.name} venue={event.venue} date={event.date} time={event.time} location={event.location}/>
      ))}
    </div>
  )
}

export default EventsList