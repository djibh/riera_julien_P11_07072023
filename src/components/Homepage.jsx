import homebannerImageSource from '../assets/home-banner-img.png'
import useAllApartments from '../hooks/useAllApartments';
import Banner from './Banner';
import Grid from './Grid';
import './Homepage.css';

function Homepage() {
  const apartements = useAllApartments()
  return <>
          <Banner imgSource={ homebannerImageSource } title={'Chez vous,\npartout et ailleurs'}/>
          <Grid data={ apartements }/>
        </>
}

export default Homepage;
