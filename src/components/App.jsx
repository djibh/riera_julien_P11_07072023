import { apartements } from '../datas/apartements'
import homebannerImageSource from '../assets/home-banner-img.png'
import '../styles/App.css';
import Banner from './Banner';
import Grid from './Grid';

function App() {
  return <>
          <Banner img-source={ homebannerImageSource }/>
          <Grid data={ apartements }/>
        </>

}

export default App;
