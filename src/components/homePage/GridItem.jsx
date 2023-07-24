import { Link } from 'react-router-dom'
import './GridItem.css'

function GridItem({ apartment }) {

    const strollToTop = () => { window.scrollTo({top: 0, left: 0 }) }

    return <article className="grid__item">
        <Link to={`/apartment/${apartment.id}`} 
              className="grid__item--content" 
              state={ {apartmentId: apartment.id} } 
              onClick={ strollToTop }>
            <img src={apartment.cover} className="grid__item--picture" alt="location" />
            <h2 className="grid__item--title">{ apartment.title }</h2>
        </Link>
    </article>
}

export default GridItem