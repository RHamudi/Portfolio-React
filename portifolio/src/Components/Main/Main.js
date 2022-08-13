import {Container,Bold, Button} from './MainStyled'

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
                <Button>Hire me</Button>
                <Button>Portifolio</Button>
                <div>Whatssapp</div>
            </div>
        </Container>
    )
}

export default Main