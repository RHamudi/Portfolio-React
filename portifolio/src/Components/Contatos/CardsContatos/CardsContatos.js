import {Button,Container} from './CardsContatosSyled'


function CardsContatos({ title, dados, link, icon }) {
  return (
    <Container className='animeLeft'>
      <h1>{icon} {title}</h1>
      <p>{dados}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <Button>Entre em contato</Button>
      </a>
    </Container>
  );
}

export default CardsContatos;
