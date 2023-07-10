import GridItem from './GridItem'
import '../styles/Grid.css'


function Grid({ data }) {
  return (
    <section className="grid">
      { data.map((apartement) => 
        <GridItem 
          key={apartement.id}
          title={apartement.title}
          cover={apartement.cover}
        />) }
    </section>
  )
}

export default Grid
