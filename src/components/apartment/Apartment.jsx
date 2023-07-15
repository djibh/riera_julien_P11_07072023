import Banner from '../Banner'
import ApartmentHeader from './ApartmentHeader'
import ApartmentDetails from './ApartmentDetails'
import '../../styles/Apartement.css'
import { useLocation } from 'react-router-dom'

function Apartment() {

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
