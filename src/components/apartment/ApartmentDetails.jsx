import '../../styles/ApartmentDetails.css'

function ApartmentDetails() {
  return (
    <section className="apartment-details">
      <article className="details__description collapser">
        <div className="collapser__title">
          <span>Description</span>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
        <p className="collapser__content">
        Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).
        </p>
      </article>
      <article className="details__equipement collapser">
        <div className="collapser__title">
          <span>Equipement</span>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
        <ul className="collapser__content">
          <li>Climatisation</li>
          <li>Wi-Fi</li>
          <li>Cuisine</li>
          <li>Espace de travail</li>
          <li>Fer à repasser</li>
          <li>Sèche-cheveux</li>
          <li>Cintres</li>
        </ul>
      </article>
    </section>
  )
}

export default ApartmentDetails
