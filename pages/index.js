import Card from  '../p01_components/Card';
import Layout from  './../p01_components/Layout'

export default function Home() {
  const setRoute = (route) => {

  }

  const character_info = [
    {
      title: "Characters",
      img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      content: "Busca a los personajes",
      description: "Listado de todos los personajes",
      route: "/characters"
    },
    {
      title: "Locations",
      img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      content: "Busca las locaciones",
      description: "Listado de todas las locaciones",
      route: "/locations"
    }
  ]

  return (
        <>
          <Layout>
            <div style={{ padding: "1rem" }}>
              {character_info.map( (card, i) => 
                <Card key={i} img={card.img} title={card.title} content={card.content} description={ card.description} route={card.route}/>
              )}
            </div>
          </Layout>
        </>
  )
}
