import {Container,MainC,Bold, Button} from './MainStyled'
import {FiArrowRight} from 'react-icons/fi'
import About from '../About/About'
import { Link } from 'react-router-dom'
import perfil from '../../Assets/RamonPERFIL.jpg'

function Main(){
    return (
        <>
        <Container className='animeLeft'>
        <MainC>
            <div>
                <img src={perfil} alt='placeholder'/>
            </div>
            <div>
                <p>Hello, I`m a</p>
                <Bold>Web developer</Bold>
                <p>Ramon Ramos</p>
                <Link to="/portifolio"><Button>Projetos <FiArrowRight /></Button></Link>
            </div>
        </MainC>
        <About />
        </Container>
      </>
    )
}

export default Main