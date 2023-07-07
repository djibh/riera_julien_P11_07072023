import GridItem from './GridItem'
import '../styles/Grid.css'
import { apartements } from '../datas/apartements'

function Grid() {
  return (
    <section className="grid">
      { apartements.map((apartement) => 
        <GridItem 
          key={apartement.id}
          title={apartement.title}
          cover={apartement.cover}
        />) }
    </section>
  )
}

export default Grid
