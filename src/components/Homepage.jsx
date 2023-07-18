import { apartements } from '../datas/apartements'
import homebannerImageSource from '../assets/home-banner-img.png'
import Banner from './Banner';
import Grid from './Grid';
import './Homepage.css';

function Homepage() {
  return <>
          <Banner imgSource={ homebannerImageSource } title={'Chez vous, partout et ailleurs'}/>
          <Grid data={ apartements }/>
        </>

}

export default Homepage;
