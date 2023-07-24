import { useParams } from 'react-router-dom'
import getApartment from '../../api/getApartment'
import ApartmentHeader from './ApartmentHeader'
import ApartmentDetails from './ApartmentDetails'
import Carousel from './Carousel'
import './Apartment.css'

function Apartment() {
  const { id } = useParams()
  const apartment = getApartment(id)

  return (
    <div className='apartement-page'>
        <Carousel pictures={ apartment.pictures }/>
        <ApartmentHeader selectedApartment={ apartment }/>
        <ApartmentDetails selectedApartment={ apartment }/>
    </div>
  )
}

export default Apartment
