import '../../styles/ApartmentHeader.css'

function ApartmentHeader() {

const tagsList = ['Cozy', 'Canal', 'Paris 10']
const ownerName = "Alexandre Dumas"
const ownerSplitName = ownerName.split(' ')

  return (
    <section className="apartment-header">
      <div className="title__container">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <h2>Paris, Île-de-France</h2>
        <ul className="apartments__tags">
            { tagsList.map((tag) =>
                <li key={tag}>{tag}</li>)
            }
        </ul>
      </div>
      <div className="owner__container">
        <div className="apartment__owner">
            <div className='owner__name'>
              <h3>{ ownerSplitName[0] }</h3>
              <h3>{ ownerSplitName[1] }</h3>
            </div>
            <div className="apartment__owner-picture"></div>
        </div>
        <div className="apartment__rating">
            <span className="rating__star--on stars"><i className="fa-solid fa-star"></i></span>
            <span className="rating__star--on stars"><i className="fa-solid fa-star"></i></span>
            <span className="rating__star--on stars"><i className="fa-solid fa-star"></i></span>
            <span className="rating__star--off stars"><i className="fa-solid fa-star"></i></span>
            <span className="rating__star--off stars"><i className="fa-solid fa-star"></i></span>
        </div>
      </div>
    </section>
  )
}

export default ApartmentHeader
