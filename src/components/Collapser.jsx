import './Collapser.css'

function Collapser( {title, content} ) {
  return (
    <article className="details__description collapser">
        <div className="collapser__title">
          <span>{ title }</span>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <p className="collapser__content">
        { content }
        </p>
      </article>
  )
}

export default Collapser
