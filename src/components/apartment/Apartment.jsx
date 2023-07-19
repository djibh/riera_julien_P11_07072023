import Banner from '../Banner'
import ApartmentHeader from './ApartmentHeader'
import { useParams } from 'react-router-dom'
import ApartmentDetails from './ApartmentDetails'
import getApartment from '../../api/getApartment'
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
