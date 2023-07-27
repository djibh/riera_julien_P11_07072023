import { Navigate, useParams } from 'react-router-dom'
import getApartment from '../../api/getApartment'
import ApartmentHeader from './ApartmentHeader'
import ApartmentDetails from './ApartmentDetails'
import Carousel from './Carousel'
import './Apartment.css'

function Apartment() {
  const { id } = useParams()
  const apartment = getApartment(id)

  // sends to unknown url to provide 404 disclaimer and stop component rendering
  if (apartment === undefined) {
    return <Navigate to='notfound'/>
  }

  return (
    <div className='apartement-page'>
        <Carousel pictures={ apartment.pictures }/>
        <ApartmentHeader selectedApartment={ apartment }/>
        <ApartmentDetails selectedApartment={ apartment }/>
    </div>
  )
}

export default Apartment
