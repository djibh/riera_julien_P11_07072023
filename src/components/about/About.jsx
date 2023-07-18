import aboutBannerImageSource from '../../assets/about-banner-img.png'
import Banner from "../Banner"
import Collapser from "../Collapser"
import { listOfContent } from '../../datas/aboutPageContents'

function About() {
  return <>
            <Banner imgSource={ aboutBannerImageSource }/>
            <section>
                {
                    listOfContent.map((content) =>
                    <Collapser key={ content.title } title={ content.title } content={ content.content }/>)
                }
            </section>
        </>
}

export default About