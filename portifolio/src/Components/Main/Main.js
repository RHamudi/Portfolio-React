import {Container,MainC,Bold, Button} from './MainStyled'
import {FiArrowRight} from 'react-icons/fi'
import About from '../About/About'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Main(){
    return (
        <>
        <Container>
        <MainC>
            <div>
                <img src='https://via.placeholder.com/150' alt='placeholder'/>
            </div>
            <div>
                <p>Hello, I`m a</p>
                <Bold>Web developer</Bold>
                <p>Ramon Ramos</p>
                <Link to="/portifolio"><Button>Portifolio <FiArrowRight /></Button></Link>
            </div>
        </MainC>
        <About />
        </Container>
        <Footer />
      </>
    )
}

export default Main