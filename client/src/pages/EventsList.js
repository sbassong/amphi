import Listing from '../components/Listing'

const EventsList = (props) => {

  return (
    <div>
      {props.map(event => (
        <Listing key={event.event_id} image name={event.name} venue={event.venue} date={event.date} time={event.time} location={event.location}/>
      ))}
    </div>
  )
}

export default EventsList