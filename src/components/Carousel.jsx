import { useState } from 'react'
import './Carousel.css'

function Carousel({ pictures }) {

    const [currentIndex, setcurrentIndex] = useState(0)
    const maxcurrentIndex = pictures.length - 1

    const handleClickPrevious = () => { 
        (currentIndex === 0) 
        ? setcurrentIndex(maxcurrentIndex) 
        : setcurrentIndex(currentIndex - 1) }

    const handleClickNext = () => { 
        (currentIndex === maxcurrentIndex)
        ? setcurrentIndex(0)
        : setcurrentIndex(currentIndex + 1)}

    return <div className="carousel">
            <img src={ pictures[currentIndex] } alt={`Pièce-${currentIndex+1}`}></img>
            <button className='btn-prev' onClick={handleClickPrevious}><i className="fa-solid fa-chevron-left"></i></button>
            <button className='btn-next' onClick={handleClickNext}><i className="fa-solid fa-chevron-right"></i></button>
            <div className='slider-count'>{`${currentIndex + 1} / ${pictures.length}`}</div>
        </div> 
}

export default Carousel
