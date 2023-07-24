import './ApartmentHeader.css'

function ApartmentHeader({ selectedApartment }) {

const { name } = selectedApartment.host
const { rating } = selectedApartment
const [firstName, lastName] = name.split(' ')
const ratingScale = [1,2,3,4,5]

  return (
    <section className="apartment-header">
      <div className="title__container">
        <h1>{ selectedApartment.title }</h1>
        <h2>{ selectedApartment.location }</h2>
        <ul className="apartments__tags">
            { selectedApartment.tags.map((tag) =>
                <li key={tag}>{tag}</li>)
            }
        </ul>
      </div>
      <div className="owner__container">
        <div className="apartment__owner">
            <div className='owner__name'>
              <h3>{ firstName }</h3>
              <h3>{ lastName }</h3>
            </div>
            <div className="apartment__owner-picture">
              <img src={ selectedApartment.host.picture } alt='owner' />
            </div>
        </div>
        <div className="apartment__rating">
            { ratingScale.map((number) => 
                <span key={number} className={rating >= number 
                  ? "rating__star--on stars" 
                  : "rating__star--off stars" }><i className="fa-solid fa-star"></i></span>
            )
            }
        </div>
      </div>
    </section>
  )
}

export default ApartmentHeader
