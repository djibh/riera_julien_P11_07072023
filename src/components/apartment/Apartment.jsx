import Banner from '../Banner'
import ApartmentHeader from './ApartmentHeader'
import ApartmentDetails from './ApartmentDetails'
import '../../styles/Apartement.css'

function Apartment() {
  return (
    <main className='apartement-page'>
        <Banner />
        <ApartmentHeader />
        <ApartmentDetails />
    </main>
  )
}

export default Apartment
