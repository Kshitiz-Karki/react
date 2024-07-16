import './css/style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from '../src/data'

//coverImg, stats, location, title, price

function App() {
  const cardElements = data.map(card => 
    <Card
      key={card.id}
      card={card}
    />
  )
  // console.log('data - ', data);
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Card /> */}
      <section className='cardlist'>
        {cardElements}
      </section>
    </>
  )  
}

export default App
