import '../../styles/ApartmentDetails.css'

function ApartmentDetails({ selectedApartment }) {
  return (
    <section className="apartment-details">
      <article className="details__description collapser">
        <div className="collapser__title">
          <span>Description</span>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <p className="collapser__content">
         { selectedApartment.description }
        </p>
      </article>
      <article className="details__equipement collapser">
        <div className="collapser__title">
          <span>Equipement</span>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <ul className="collapser__content">
          { selectedApartment.equipments.map((equipment) => 
            <li key={equipment}>{equipment}</li>
          )}
        </ul>
      </article>
    </section>
  )
}

export default ApartmentDetails
