import Banner from '../Banner'
import ApartmentHeader from './ApartmentHeader'
import ApartmentDetails from './ApartmentDetails'
import './Apartement.css'
import { useLocation, useParams } from 'react-router-dom'

function Apartment() {

  // let { id } = useParams()
  let { state } = useLocation()

  return (
    <main className='apartement-page'>
        <Banner />
        <ApartmentHeader selectedApartment={ state.apartment }/>
        <ApartmentDetails selectedApartment={ state.apartment }/>
    </main>
  )
}

export default Apartment
