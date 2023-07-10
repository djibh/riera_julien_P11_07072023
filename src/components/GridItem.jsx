import '../styles/GridItem.css'

function GridItem( { title, cover }) {
    return <article className="grid__item">
        <div className="grid__item--content">
            <img src={cover} className="grid__item--picture" alt="location" />
            <h2 className="grid__item--title">{title}</h2>
        </div>
    </article>
}

export default GridItem