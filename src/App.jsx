import reactImg from './assets/react-core-concepts.png';
import compoImg from './assets/components.png'
const descriptions = ['Core', 'Fundamental', 'Crucial'];

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

function CoreConcept({title,img,description}){
  return(
    <li>
      <img src={img} alt={title}/>
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
                title='Components' 
                img={compoImg} 
                description='The core UI building block' />
              <CoreConcept />
              <CoreConcept />
              <CoreConcept />
            </ul>
          </section>
        </main>
    </div>
  );
}

export default App;
