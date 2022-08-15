import Cards from "./Cards/Cards";
import { Container, H1 } from "./PortifolioStyled";

function Portifolio() {
  return (
    <>
      <H1>Projetos</H1>
      <Container>
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/150"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/150"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/150"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/150"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/150"
          alt="teste"
        />
        <Cards
          title="Rede social Dogs"
          src="https://via.placeholder.com/150"
          alt="teste"
        />
      </Container>
    </>
  );
}

export default Portifolio;
