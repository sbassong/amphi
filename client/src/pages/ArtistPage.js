import Listing from '../components/Listing'
import ArtistSection from '../components/ArtistSection'

const ArtistPage = (props) => {
  //2 different props should come here, artists and events alike
  return (
    <div>
      <ArtistSection />
      <div>
        {props.map(event => (
          <Listing key={event.event_id} image name={event.name} venue={event.venue} date={event.date} time={event.time} location={event.location} />
        ))}
      </div>
    </div>
      
  )
}

export default ArtistPage