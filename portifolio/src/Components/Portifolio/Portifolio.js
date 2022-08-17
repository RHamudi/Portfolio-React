import Cards from "./Cards/Cards";
import { Container, H1 } from "./PortifolioStyled";

function Portifolio() {
  return (
    <>
      <H1 className="animeLeft">Projetos</H1>
      <Container className="animeLeft">
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/200"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/200"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/200"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/200"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/200"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/200"
          alt="teste"
        />
      </Container>
    </>
  );
}

export default Portifolio;
