import Collapse from '../Collapse'
import './ApartmentDetails.css'

function ApartmentDetails({ selectedApartment }) {

  let descriptionContent = 
    <p>{ selectedApartment.description }</p>

  let equipmentsContent = 
    <ul>
      { selectedApartment.equipments.map((equipment) => 
        <li key={equipment}>{equipment}</li>
      )}
    </ul>

  return (
    <section className="apartment-details">
      <Collapse title='Description' content={descriptionContent}/>
      <Collapse title='Equipement' content={equipmentsContent}/>
    </section>
  )
}

export default ApartmentDetails
