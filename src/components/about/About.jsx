import homebannerImageSource from '../../assets/about-banner-img.png'
import Banner from "../Banner"
import Collapser from "../Collapser"

function About() {
  return <>
            <Banner img-source={ homebannerImageSource }/>
            <section>
                <Collapser text />
            </section>
        </>
}

export default About
