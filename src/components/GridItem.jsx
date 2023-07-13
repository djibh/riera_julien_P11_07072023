import '../styles/GridItem.css'
import { Link } from 'react-router-dom'

function GridItem( { title, cover }) {
    return <article className="grid__item">
        <Link to='/apartment' className="grid__item--content">
            <img src={cover} className="grid__item--picture" alt="location" />
            <h2 className="grid__item--title">{title}</h2>
        </Link>
    </article>
}

export default GridItem