import { CORE_CONCEPTS } from '../data';
import CoreConcept from './core-concept';
import './home.css'
import Tab from './tab/tab'

const Home = () => {

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map(({ id, title, description, image }) => (
            <CoreConcept key={id} title={title} description={description} image={image}/>
          ))}
        </ul>
      </section>
      <Tab />
    </main>
  )
}

export default Home;
