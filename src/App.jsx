import reactImg from './assets/react-core-concepts.png';
const descriptions = ['Core', 'Fundamental', 'Crucial'];
import { CORE_CONCEPTS } from './data';

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header(){
  const description = descriptions[genRandomInt(2)]
  return(
      <header>
        <img src={reactImg} alt='Cool atom'/>
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcept({image,title,description}){
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
        <main>
          <section id='core-concepts' >
            <h2>Core Concepts!</h2>
            <ul>
              <CoreConcept 
                title={CORE_CONCEPTS[0].title} 
                image={CORE_CONCEPTS[0].image} 
                description={CORE_CONCEPTS[0].description} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept 
                title={CORE_CONCEPTS[2].title}
                image={CORE_CONCEPTS[2].image} 
                description={CORE_CONCEPTS[2].description}
                />
              <CoreConcept
                title={CORE_CONCEPTS[3].title}
                image={CORE_CONCEPTS[3].image} 
                description={CORE_CONCEPTS[3].description}
              />
            </ul>
          </section>
        </main>
    </div>
  );
}

export default App;
