import homebannerImageSource from '../../assets/about-banner-img.png'
import Banner from "../Banner"
import Collapser from "../Collapser"
import { listOfContent } from '../../datas/aboutPageContents'

function About() {
  return <>
            <Banner img-source={ homebannerImageSource }/>
            <section>
                {
                    listOfContent.map((content) =>
                    <Collapser title={ content.title } content={ content.content }/>)
                }
            </section>
        </>
}

export default About