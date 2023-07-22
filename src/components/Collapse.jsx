import { useState } from 'react'
import './Collapse.css'

function Collapse( {title, content} ) {
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = () => { setIsVisible(!isVisible) }
  
  return (
    <article>
      <div className="collapser">
          <div className="collapser__title" onClick={ handleClick }>
            <span>{ title }</span>
            <i className={isVisible ? "fa-solid fa-chevron-down active" : "fa-solid fa-chevron-down" }></i>
          </div>
          <div className={isVisible ? "collapser__content" : "collapser__content hidden" }>{ content }</div> 
        </div>
      </article>
  )
}

export default Collapse