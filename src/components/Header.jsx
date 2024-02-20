import reactImg from '../assets/react-core-concepts.png';
const descriptions = ['Core', 'Fundamental', 'Crucial'];

function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }

export default function Header(){
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