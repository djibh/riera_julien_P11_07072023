import aboutBannerImageSource from '../../assets/about-banner-img.png'
import Banner from "../Banner"
import Collapse from "../Collapse"
import { listOfSections } from '../../data/aboutPageContents'
import './About.css'

function About() {
  return <div className='about-page'>
            <Banner imgSource={ aboutBannerImageSource }/>
            <section>
                {
                    listOfSections.map((section, index) => {
                        const collapseContent = <p>{section.content}</p>;
                        return <Collapse key={ index } title={ section.title } content={ collapseContent }/>
                    } 
                    )
                }
            </section>
        </div>
}

export default About