import { apartements } from '../datas/apartements'
// import homebannerImageSource from '../assets/home-banner-img.png'
import '../styles/Homepage.css';
import Banner from './Banner';
import Grid from './Grid';

const homebannerImageSource = '../assets/home-banner-img.png'

function Homepage() {
  return <>
          <Banner img-source={ homebannerImageSource }/>
          <Grid data={ apartements }/>
        </>

}

export default Homepage;
