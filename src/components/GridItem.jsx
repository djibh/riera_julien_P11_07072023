import { Link } from 'react-router-dom'
import './GridItem.css'

function GridItem({ apartment }) {
    return <article className="grid__item">
        <Link to={`/apartment/${apartment.id}`} className="grid__item--content" state={ {apartment: apartment} }>
            <img src={apartment.cover} className="grid__item--picture" alt="location" />
            <h2 className="grid__item--title">{apartment.title}</h2>
        </Link>
    </article>
}

export default GridItem