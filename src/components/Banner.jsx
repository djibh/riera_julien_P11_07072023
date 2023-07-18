import './Banner.css'
import PropTypes from 'prop-types'

function Banner({ imgSource, title }) {
    return <div className="banner">
            <img src={ imgSource } alt='Bannière à propos'></img>
            <h1>{ title }</h1>
        </div> 
}

Banner.propTypes = {
    imgSource: PropTypes.string,
    title: PropTypes.string    
  };

export default Banner