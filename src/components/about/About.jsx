import aboutBannerImageSource from '../../assets/about-banner-img.png'
import Banner from "../Banner"
import Collapser from "../Collapser"
import { listOfContent } from '../../data/aboutPageContents'

function About() {
  return <>
            <Banner imgSource={ aboutBannerImageSource }/>
            <section>
                {
                    listOfContent.map((content, index) =>
                    <Collapser key={ index } title={ content.title } content={ content.content }/>)
                }
            </section>
        </>
}

export default About