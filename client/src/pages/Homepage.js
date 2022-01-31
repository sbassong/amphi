import FeaturedSection from '../components/FeaturedSection'

const Homepage = ({artists}) => {
  const categories = ['hip hop', 'rock', 'pop']


  return (
    <div className='homepage'>
      {
        categories.map(category => (
          <FeaturedSection category={category} artists={artists}/>
        ))
      }
    </div>
  )
}

export default Homepage