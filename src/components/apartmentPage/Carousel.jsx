import { useState } from 'react'
import './Carousel.css'

function Carousel({ pictures }) {

    const [currentIndex, setcurrentIndex] = useState(0)
    const maxCurrentIndex = pictures.length - 1

    const handleClickPrevious = () => { 
        (currentIndex === 0) 
        ? setcurrentIndex(maxCurrentIndex) 
        : setcurrentIndex(prevValue => prevValue - 1) }

    const handleClickNext = () => { 
        (currentIndex === maxCurrentIndex)
        ? setcurrentIndex(0)
        : setcurrentIndex(prevValue => prevValue + 1)}

    return <div className="carousel">
            <img src={ pictures[currentIndex] } alt={`Pièce-${currentIndex+1}`} />
            {
                pictures.length > 1 && <div className='carousel__controls'>
                        <button className='btn-prev' onClick={handleClickPrevious}><i className="fa-solid fa-chevron-left"></i></button>
                        <button className='btn-next' onClick={handleClickNext}><i className="fa-solid fa-chevron-right"></i></button>
                        <div className='slider-count'>{`${currentIndex + 1} / ${pictures.length}`}</div>
                    </div>
            }
        </div> 
}

export default Carousel