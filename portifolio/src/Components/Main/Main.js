import {Container,Bold, Button} from './MainStyled'
import {FiArrowRight} from 'react-icons/fi'

function Main(){
    return (
        <Container>
            <div>
                <img src='https://via.placeholder.com/150' alt='placeholder'/>
            </div>
            <div>
                <p>Hello, I`m a</p>
                <Bold>Web developer</Bold>
                <p>Ramon Ramos</p>
                <Button>Hire me <FiArrowRight /></Button>
                <Button>Portifolio <FiArrowRight /></Button>
            </div>
        </Container>
    )
}

export default Main