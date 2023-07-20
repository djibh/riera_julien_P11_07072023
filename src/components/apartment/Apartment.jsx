import { useParams } from 'react-router-dom'
import getApartment from '../../api/getApartment'
import Banner from '../Banner'
import ApartmentHeader from './ApartmentHeader'
import ApartmentDetails from './ApartmentDetails'
import './Apartment.css'

function Apartment() {
  const { id } = useParams()
  const apartment = getApartment(id)

  return (
    <main className='apartement-page'>
        <Banner imgSource={ apartment.cover }/>
        <ApartmentHeader selectedApartment={ apartment }/>
        <ApartmentDetails selectedApartment={ apartment }/>
    </main>
  )
}

export default Apartment
