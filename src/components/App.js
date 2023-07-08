import '../styles/App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Grid from './Grid';
import Footer from './Footer';

function App() {
  return <main>
      <div className='wrapper'>
        <Navbar />
        <Banner />
        <Grid />
      </div>
      <Footer />
  </main>

}

export default App;
